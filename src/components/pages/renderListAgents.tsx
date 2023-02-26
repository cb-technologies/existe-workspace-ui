import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box} from "@mui/material";
import { Button } from "@mui/material";
import AWS from "aws-sdk";
import { useEffect, useState } from "react";
import { URLExistPath } from "../../constants/existUrlPath";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { AuthContext } from "../../store/auth_context";
import '../../utils/shine.css'
import { AWS_ACCESS_KEY, AWS_POOL_ID, AWS_REGION, AWS_SECRET_ACCESS } from "../../constants/awsCognitoSettings";

export default function CustomizedTables() {
  const navigate = useNavigate();

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.info.dark,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledFirstRowCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));


  function createData(
    email: string,
    Nom: string,
    Prenom: string,
    NumeroCellulaire: string,
    Role: string,
    Status: string,
    Verification: string,
    Enabled : boolean,
    Image: string
  ) {
    return { email, Nom, Prenom, NumeroCellulaire, Role,Status, Verification, Enabled, Image};
  }

  AWS.config.update({
    region: AWS_REGION,
    credentials: new AWS.Credentials(
      AWS_ACCESS_KEY,
      AWS_SECRET_ACCESS
    ),
  });

  const cognito = new AWS.CognitoIdentityServiceProvider();

  async function getAllUsers() {
    const params = {
      UserPoolId: AWS_POOL_ID,
    };
    return cognito.listUsers(params).promise();
  }


  const ableUser = async (username: any) => {
    const params = {
      UserPoolId: AWS_POOL_ID,
      Username: username,
    };
  
    try {
      await cognito.adminEnableUser(params).promise();
      console.log(`User ${username} has been abled.`);
      setLoading(true)
    } catch (error) {
      console.error(error);
    }
  };

  const disableUser = async (username: any) => {
    const params = {
      UserPoolId: AWS_POOL_ID,
      Username: username,
    };
  
    try {
      await cognito.adminDisableUser(params).promise();
      console.log(`User ${username} has been disabled.`);
      setLoading(true)
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (username: any) => {
    const params = {
      UserPoolId: AWS_POOL_ID,
      Username: username,
    };
  
    try {
      const result = await cognito.adminDeleteUser(params).promise();
      console.log(`User ${username} deleted from User Pool ${AWS_POOL_ID}.`);
      setLength(length-1)
      return result;
    } catch (error) {
      console.error(error);
    }
  };



  const [rows, setRows] = useState([createData("", "", "", "", "", "", "", false, "")]);

  const authContext = React.useContext(AuthContext);

  const [role, setRole] = useState("undefined");
  const [isLoggedIn, setIsLoggedIn] = useState(authContext.isAuthenticated);
  const [loading, setLoading] = useState(false);
  const [length, setLength] = useState(5)

  const getBackgroundColor = (role: string) => {
    switch (role) {
      case 'Admin':
        return {begin: '#FFD700',end: '#ffa600'};
      case 'Printer':
        return {begin: '#FFCD32', end: '#965A38'};
      case 'Registrator':
        return {begin: '#E6E8FA', end: '#BFC1C6'};
      default:
        return {begin: '#fff', end: '#fff'};
    }
  };
  
  interface OvalBoxProps {
    text: string;
    bgColor: {
      begin: string;
      end: string;
    };
  }

  const OvalBox: React.FC<OvalBoxProps> = ({ text, bgColor }) => {
    return (
      <Box
        component="span"
        minWidth="fit-content"
        minHeight="fit-content"
        borderRadius="10px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{
          background: `linear-gradient(to right, ${bgColor.begin}, ${bgColor.end})`,
          backgroundSize: '200% 100%',
          animation: 'shine 20s ease-in-out infinite',
        }}
      >
        {text}
      </Box>
    );
  };
  
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user")!);
    if (storedUser) {
      setIsLoggedIn(true);
      setRole(storedUser.attributes["custom:role"]);
      authContext.setIsAuthenticatedAndUser(true, storedUser);
    } else {
      setRole(authContext.user.attributes["custom:role"]);
    }

    getAllUsers()
      .then((data) => {
        if (data && data.Users) {
          const data_users = data.Users;
          var holder_array = [createData("", "", "", "", "", "", "",false, "")];
          rows.splice(0, rows.length);
          holder_array.splice(0, holder_array.length);

          data_users.forEach((u_user) => {
            console.log(u_user)
            const updated = u_user.UserLastModifiedDate
              ? u_user.UserLastModifiedDate.toString()
              : "Unknown";

            const created = u_user.UserCreateDate
              ? u_user.UserCreateDate.toString()
              : "Unkown";

            var user_email = "";
            var user_nom = "";
            var user_prenom = "";
            var user_phone = "";
            var user_role = "";
            var user_image = "";
            const user_status = u_user.UserStatus ? u_user.UserStatus : "Unkown";
            var email_verified = ""
            const user_enabled = u_user.Enabled ? u_user.Enabled : false;

            u_user.Attributes?.map((attr, index) => {
              var attr_name = attr.Name.toString()
              if (attr_name === "custom:prenom") {
                user_prenom = attr.Value ? attr.Value.toString() : "Unknown";
              }else if (attr_name === "custom:nom") {
                user_nom = attr.Value ? attr.Value.toString() : "Unknown";
              }else if (attr_name === "custom:role") {
                user_role = attr.Value ? attr.Value.toString() : "Unknown";
              }else if (attr_name === "custom:phonenumber") {
                user_phone = attr.Value ? attr.Value.toString() : "Unknown";
              }else if (attr_name === "custom:phonenumber") {
                user_phone = attr.Value ? attr.Value.toString() : "Unknown";
              }else if (attr_name === "email_verified") {
                email_verified = attr.Value ? attr.Value.toString() : "Unknown";
              }else if (attr_name === "email") {
                user_email = attr.Value ? attr.Value.toString() : "Unknown";
              }
            });

            holder_array.push(
              createData(user_email, user_nom, user_prenom, user_phone, user_role,user_status, email_verified, user_enabled, user_image)
            );
          });
          setRows(holder_array);
        }
      })
      .catch((error) => {
        console.error(error);
      });
      setLoading(false)
  }, [length, loading]);

  if (isLoggedIn && role === "Admin") {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledFirstRowCell>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    navigate(URLExistPath.SignUpPage);
                  }}
                >
                  Add Agent
                </Button>
              </StyledFirstRowCell>
            </TableRow>
            <TableRow>
              
              <StyledTableCell align="left">Nom</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Numero Cellulaire</StyledTableCell>
              <StyledTableCell align="left">Role</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="left">Verifié</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.email}>
                <StyledTableCell component="th" scope="row">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ marginLeft: 8 }}>{row.Prenom + " " + row.Nom}</span>
                  </div>
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.email}
                </StyledTableCell>
                <StyledTableCell align="left">{row.NumeroCellulaire}</StyledTableCell>
                <StyledTableCell align="left"><OvalBox text={row.Role} bgColor={getBackgroundColor(row.Role)} /></StyledTableCell>
                <StyledTableCell align="left">{row.Status}</StyledTableCell>
                <StyledTableCell align="left">{row.Verification}</StyledTableCell>
                <StyledTableCell align="right" >
                  {row.Enabled ? (
                    <Button size="small" variant="outlined" color="primary" onClick={() => disableUser(row.email)}>
                      Disable
                    </Button>
                  ) : (
                    <Button size="small" variant="outlined" color="primary" onClick={() => ableUser(row.email)}>
                      Enable
                    </Button>
                  )}
                  <Button size="small" variant="outlined" color="error" style={{ marginLeft: 8 }}
                  onClick={() => deleteUser(row.email)}>
                    Delete
                  </Button>
              </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else if (!isLoggedIn) {
    return (
      <div>
        <Alert severity="error">
          <AlertTitle>Accès refusé</AlertTitle>
          "Désolé, vous n'êtes pas autorisé à accéder à cette page" —{" "}
          <strong>Accès refusé</strong>
        </Alert>
      </div>
    );
  } else {
    return (
      <div>
        <Alert severity="error">
          <AlertTitle>Chargement</AlertTitle>
          "Quelques seconde la Page est entrain de charger" —{" "}
          <strong>Loading</strong>
        </Alert>
      </div>
    );
  }
}
