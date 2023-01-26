import React from 'react';
import { TableHead, TableRow, TableCell, Typography, Button } from '@mui/material';

function MyTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <Typography variant="h6">Title</Typography>
        </TableCell>
        <TableCell align="right">
          <Button variant="contained" color="primary">
            Click me
          </Button>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default MyTableHead;