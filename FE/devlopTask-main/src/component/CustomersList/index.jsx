import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { actions } from "../../redux/actions.js";
import { getCustomers } from "../../services/customer.service.js";
import "./style.css";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

function CustomersList(props) {
  const { setCustomers, customers } = props;

  useEffect(() => {
    getCustomers(setCustomers);
  }, []);

  return (
    <Grid className="listContainer">
      <h1>Customers List</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Hebrew Name</TableCell>
              <TableCell align="right">English Name</TableCell>
              <TableCell align="right">Birth Date</TableCell>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">City Code</TableCell>
              <TableCell align="right">Bank</TableCell>
              <TableCell align="right">Bank branch</TableCell>
              <TableCell align="right">Account Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell component="th" scope="row">
                  {customer.HebrewName}
                </TableCell>
                <TableCell align="right">{customer.EnglishName}</TableCell>
                <TableCell align="right">
                  {new Date(customer.BirthDate).toISOString().slice(0, 10)}
                </TableCell>
                <TableCell align="right">{customer.Id}</TableCell>
                <TableCell align="right">{customer.City.Name}</TableCell>
                <TableCell align="right">{customer.Bank}</TableCell>
                <TableCell align="right">{customer.Bank_branch}</TableCell>
                <TableCell align="right">{customer.Account_number}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
export default connect(
  (state, ownProps) => {
    return {
      customers: state.customerReducer.customers,
    };
  },
  (dispatch) => {
    return {
      setCustomers: (response) => dispatch(actions.setCustomers(response)),
    };
  }
)(CustomersList);
