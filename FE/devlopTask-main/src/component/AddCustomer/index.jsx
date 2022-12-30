import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { Field, reduxForm, getFormValues } from "redux-form";
import { Button, Alert, Link } from "@mui/material";
import { actions } from "../../redux/actions.js";
import { AutoComplete as MUIAutoComplete } from "material-ui";
import { AutoComplete, DatePicker, TextField } from "redux-form-material-ui";
import { getBanksList } from "../../services/bank.service.js";
import { getCities } from "../../services/city.service.js";
import { addCustomer } from "../../services/customer.service.js";
import "./style.css";

const required = (value) => (value == null ? "Required" : undefined);
const maxLength = (maxNumber) => (value) =>
  value?.length > maxNumber
    ? `Must be ${maxNumber} characters or less`
    : undefined;
const max20Length = maxLength(20);
const max15Length = maxLength(15);
const max9Length = maxLength(9);
const max10Length = maxLength(10);
const onlyHebrew = (value) =>
  /[\u0590-\u05FF\s'-]+$/i.test(value) ? undefined : "Only hebrew letters";
const onlyEnglish = (value) =>
  /[a-zA-Z\s'-]+$/i.test(value) ? undefined : "Only english letters";
const onlyNumberic = (value) =>
  /[0-9]+$/i.test(value) ? undefined : "Only numbers";

function AddCustomer(props) {
  const {
    cities,
    setBanks,
    banks,
    formValues,
    filterBankBranch,
    bankBranches,
    submitting,
    invalid,
    setCities,
    setMessage,
    message,
  } = props;

  useEffect(() => {
    getBanksList(setBanks);
    getCities(setCities);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    addCustomer(formValues, setMessage);
  };

  return (
    <Grid className="formContainer">
      {message && (
        <Alert
          severity={message === "successed" ? "success" : "error"}
        >{`adding ${message}`}</Alert>
      )}
      <h1>Add Customer</h1>
      <form onSubmit={handleSubmit}>
        <Grid>
          <Field
            name="HebrewName"
            component={TextField}
            validate={[required, max20Length, onlyHebrew]}
            hintText="Full name in Hebrew"
            floatingLabelText="Full name in Hebrew"
          />
        </Grid>
        <Grid>
          <Field
            name="EnglishName"
            component={TextField}
            validate={[required, max15Length, onlyEnglish]}
            hintText="Full name in English"
            floatingLabelText="Full name in English"
          />
        </Grid>
        <Grid className="birthDate">
          <Field
            name="BirthDate"
            component={DatePicker}
            format={null}
            hintText="Day of birth"
          />
        </Grid>
        <Grid>
          <Field
            name="Id"
            component={TextField}
            validate={[required, max9Length, onlyNumberic]}
            hintText="ID"
            floatingLabelText="ID"
          />
        </Grid>
        <Grid>
          <Field
            name="City_code"
            component={AutoComplete}
            floatingLabelText="City"
            openOnFocus
            filter={MUIAutoComplete.fuzzyFilter}
            dataSourceConfig={{ text: "Name", value: "Id" }}
            dataSource={cities}
          />
        </Grid>
        <Grid>
          <Field
            name="Bank"
            component={AutoComplete}
            floatingLabelText="Bank"
            openOnFocus
            filter={MUIAutoComplete.fuzzyFilter}
            dataSourceConfig={{ text: "Description", value: "Code" }}
            dataSource={banks}
            onChange={(event) => filterBankBranch(event)}
          />
        </Grid>
        <Grid>
          <Field
            name="Bank_branch"
            component={AutoComplete}
            floatingLabelText="Bank branch"
            openOnFocus
            filter={MUIAutoComplete.fuzzyFilter}
            dataSourceConfig={{ text: "BranchName", value: "BranchNumber" }}
            dataSource={bankBranches}
            disabled={!formValues?.Bank}
          />
        </Grid>
        <Grid>
          <Field
            name="Account_number"
            component={TextField}
            validate={[max10Length, onlyNumberic]}
            hintText="Account Number"
            floatingLabelText="Account Number"
          />
        </Grid>
        <Button type="submit" disabled={invalid || submitting}>
          Submit
        </Button>
      </form>
      <Link href="/CustomerList">To see all customers</Link>
    </Grid>
  );
}
const AddCustomerWithRedux = connect(
  (state, ownProps) => {
    return {
      cities: state.bankReducer.cities,
      banks: state.bankReducer.banks,
      formValues: getFormValues("AddCustomerForm")(state),
      bankBranches: state.bankReducer.filteredBankBranches,
      message: state.customerReducer.message,
    };
  },
  (dispatch) => {
    return {
      setBanks: (response) => dispatch(actions.setBanks(response)),
      filterBankBranch: (bankCode) =>
        dispatch(actions.filterBankBranch(bankCode)),
      setCities: (response) => dispatch(actions.setCities(response)),
      setMessage: (response) => dispatch(actions.setMessage(response)),
    };
  }
)(AddCustomer);

export default reduxForm({
  form: "AddCustomerForm",
})(AddCustomerWithRedux);
