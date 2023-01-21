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

// import { TableHead, TableRow, Typography, Button } from '@mui/material';

const cognito = new AWS.CognitoIdentityServiceProvider();

AWS.config.update({
    region: 'eu-west-3',
    credentials: new AWS.Credentials('AKIAWUW6U5W6ZK7ONRM3', 'pCRg/LHoJ89b5VK2/s6J+KE7VwfviueChlxzPAFV')
  });

function getAllUsers() {
    const params = {
      UserPoolId: 'eu-west-3_KTB7W3mWQ',
    //   Limit: 10
    };
    return cognito.listUsers(params).promise();
}

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

  const [rows, setRows] = useState([createData('ntuala2@illinois.ed', 'CONFIRMED', '0819367845', 'Jan 8, 2023 5:22:53 PM', "Jan 8, 2023 4:56:26 PM")]);
  useEffect(() => {
    getAllUsers().then(data => {
        if(data && data.Users) {
            // console.log("Arriving")
            // console.log(data.Users)
            // setUsers(data.Users);
            const data_users = data.Users;
            var holder_array = [createData('ntuala2@illinois.ed', 'CONFIRMED', '0819367845', 'Jan 8, 2023 5:22:53 PM', "Jan 8, 2023 4:56:26 PM")]
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
                    console.log(user_email)
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
}
