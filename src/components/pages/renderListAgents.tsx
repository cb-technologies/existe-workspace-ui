import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import {Button} from '@mui/material';
import AWS from 'aws-sdk';
import { useEffect, useState } from 'react';
import { UsersListType } from 'aws-sdk/clients/cognitoidentityserviceprovider';
import useHistoryState from '../../hooks/useHistoryState';
import { URLExistPath } from '../../constants/existUrlPath';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { AuthContext } from '../../store/auth_context';
import { delay } from './RegisterForm';
// import { TableHead, TableRow, Typography, Button } from '@mui/material';





//  rows = [
//   createData('ntuala2@illinois.ed', 'CONFIRMED', '0819367845', 'Jan 8, 2023 5:22:53 PM', "Jan 8, 2023 4:56:26 PM"),
// //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// //   createData('Eclair', 262, 16.0, 24, 6.0),
// //   createData('Cupcake', 305, 3.7, 67, 4.3),
// //   createData('Gingerbread', 356, 16.0, 49, 3.9)
// ];

export default function CustomizedTables() {
//   const [users, setUsers] = useState<UsersListType>();

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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(
    email: string,
    accountStatus: string,
    phoneNumber: string,
    updated: string,
    created: string,
  ) {
    return { email, accountStatus, phoneNumber, updated, created };
  }


  const my_region = "eu-west-3"

  AWS.config.update({
    region: my_region,
    credentials: new AWS.Credentials('AKIAWUW6U5W6ZK7ONRM3', 'pCRg/LHoJ89b5VK2/s6J+KE7VwfviueChlxzPAFV')
  });


  const cognito = new AWS.CognitoIdentityServiceProvider();

  async function getAllUsers() {

    
    // await delay(1500);
  
      const params = {
        UserPoolId: 'eu-west-3_KTB7W3mWQ',
      //   Limit: 10
      
      };
      return cognito.listUsers(params).promise();
  }

  const [rows, setRows] = useState([createData('', '', '', '', "")]);
  //const [my_region, setRegion] = useState("eu-west-3")
  
  //const navigate = useNavigate();
  
  const navigateTo = (page: string, flag: string) => {
    navigate(page,{ state: { flag_to_page: flag } });
  };

  const authContext = React.useContext(AuthContext);
  
  const [role, setRole] = useState(authContext.user.attributes['custom:role']);
  const [isLoggedIn, setIsLoggedIn] = useState(authContext.isAuthenticated);
  
  useEffect(() => {
    // console.log("Being refreshed")
    // AWS.config.update({
    //   region: my_region,
    //   credentials: new AWS.Credentials('AKIAWUW6U5W6ZK7ONRM3', 'pCRg/LHoJ89b5VK2/s6J+KE7VwfviueChlxzPAFV')
    // });

    
    getAllUsers().then(async data => {

        // await delay(1500);

        if(data && data.Users) {
            const data_users = data.Users;
            var holder_array = [createData('', '', '', '', "")]
            rows.splice(0, rows.length);
            holder_array.splice(0, holder_array.length);

            data_users.forEach( u_user =>
                {
                    const updated =  u_user.UserLastModifiedDate ? u_user.UserLastModifiedDate.toString(): "Unknown"
                    // if (u_user.UserLastModifiedDate) {
                    //     updated = u_user.UserLastModifiedDate.toString()
                    // }
                    // console.log(typeof(updated));
                    // console.log(typeof("updated"));
                    const created = u_user.UserCreateDate ? u_user.UserCreateDate.toString() : "Unkown"
                    const status = u_user.UserStatus ? u_user.UserStatus : "Unkown"

                    var user_email = ""
                    u_user.Attributes?.map( (attr, index) => {
                        if (index === 2) {
                            user_email = attr.Value ? attr.Value.toString() : "Unknown"
                        }
                    }
                    )
                    //console.log(user_email)
                    holder_array.push(createData(user_email, status, '0819367845', updated, created))
                    //rows.push(createData(user_email, status, '0819367845', updated, created))
                    //setRows([...rows, createData(user_email, status, '0819367845', updated, created)])
                }
            );
            setRows(holder_array)
            console.log(rows.length);
        }

        // setUsers(data.Users)




    }
    ).catch(
        (error)=> {
            console.error(error);

        }
    );
  }, []);



  if (isLoggedIn && (role === "Admin")) {
    return (
    
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
          <TableRow>
              
              {/* <StyledTableCell>
                  <Typography variant="h6">Title</Typography>
              </StyledTableCell> */}
              {/* <Button variant="contained" color="primary">
                      Click me
  
                  </Button> */}
              <StyledFirstRowCell>
                  <Button variant="outlined" color="primary" onClick={() => {navigate(URLExistPath.SignUpPage)}}>
                      Add Agent
                  </Button>
              </StyledFirstRowCell>
        </TableRow>
            <TableRow>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell align="right">Phone Number</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Updated</StyledTableCell>
              <StyledTableCell align="right">Created</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.email}>
                <StyledTableCell component="th" scope="row">
                  {row.email}
                </StyledTableCell>
                <StyledTableCell align="right">{row.phoneNumber}</StyledTableCell>
                <StyledTableCell align="right">{row.accountStatus}</StyledTableCell>
                <StyledTableCell align="right">{row.updated}</StyledTableCell>
                <StyledTableCell align="right">{row.created}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }else {
    return(
      <div>
      <Alert severity="error">
                <AlertTitle>Accès refusé</AlertTitle>
                "Désolé, vous n'êtes pas autorisé à accéder à cette page" — <strong>Accès refusé</strong>
          </Alert>
    </div>
    );
  }
  
}
