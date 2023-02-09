import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Typography } from "@mui/material";
import { Button } from "@mui/material";
import AWS from "aws-sdk";
import { useEffect, useState } from "react";
import { UsersListType } from "aws-sdk/clients/cognitoidentityserviceprovider";
import useHistoryState from "../../hooks/useHistoryState";
import { URLExistPath } from "../../constants/existUrlPath";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { AuthContext } from "../../store/auth_context";
import { delay } from "./RegisterForm";

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
    Verification: string
  ) {
    return { email, Nom, Prenom, NumeroCellulaire, Role,Status, Verification};
  }

  const my_region = "eu-west-3";

  AWS.config.update({
    region: my_region,
    credentials: new AWS.Credentials(
      "AKIAWUW6U5W6ZK7ONRM3",
      "pCRg/LHoJ89b5VK2/s6J+KE7VwfviueChlxzPAFV"
    ),
  });

  const cognito = new AWS.CognitoIdentityServiceProvider();

  async function getAllUsers() {
    const params = {
      UserPoolId: "eu-west-3_KTB7W3mWQ",
    };
    return cognito.listUsers(params).promise();
  }

  const [rows, setRows] = useState([createData("", "", "", "", "", "", "")]);

  const navigateTo = (page: string, flag: string) => {
    navigate(page, { state: { flag_to_page: flag } });
  };

  const authContext = React.useContext(AuthContext);

  const [role, setRole] = useState("undefined");
  const [isLoggedIn, setIsLoggedIn] = useState(authContext.isAuthenticated);

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
      .then(async (data) => {
        if (data && data.Users) {
          const data_users = data.Users;
          var holder_array = [createData("", "", "", "", "", "", "")];
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
            const user_status = u_user.UserStatus ? u_user.UserStatus : "Unkown";
            var email_verified = ""

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
              createData(user_email, user_nom, user_prenom, user_phone, user_role,user_status, email_verified)
            );
          });
          setRows(holder_array);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
              {/* <StyledTableCell align="right">Prenom</StyledTableCell> */}
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Numero Cellulaire</StyledTableCell>
              <StyledTableCell align="left">Role</StyledTableCell>
              <StyledTableCell align="left">Status</StyledTableCell>
              <StyledTableCell align="left">Verifié</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.email}>
                <StyledTableCell component="th" scope="row">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Avatar style={{
                      backgroundColor: row.Role === "Admin" ? "#7384E3" : row.Role === "Registrator" ? "#A6D4B5" : "#D4C4A6"
                      }}>{row.Nom.substring(0, 1) + row.Prenom.substring(0, 1)}
                    </Avatar>
                    <span style={{ marginLeft: 8 }}>{row.Prenom + " " + row.Nom}</span>
                  </div>
                </StyledTableCell>
                {/* <StyledTableCell align="right">
                  {row.Nom}
                </StyledTableCell> */}
                <StyledTableCell align="left">
                  {row.email}
                </StyledTableCell>
                <StyledTableCell align="left">{row.NumeroCellulaire}</StyledTableCell>
                <StyledTableCell align="left">{row.Role}</StyledTableCell>
                <StyledTableCell align="left">{row.Status}</StyledTableCell>
                <StyledTableCell align="left">{row.Verification}</StyledTableCell>
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
