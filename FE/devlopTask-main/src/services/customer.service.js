import axios from 'axios'

const endPoint = 'http://localhost:2094/customer';

export function getCustomers(setCustomers) {
    axios.get(`${endPoint}/getAllCustomers`)
        .then((response) => {
            return response.data;
        }).then(response => {
            setCustomers(response);
        })
}

export function addCustomer(formValues, callback) {
    const customer = formValues;
    axios.post(`${endPoint}/addCustomer`, customer, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
        .then((response) => {
            return response.data;
        }).then(response => {
            callback('successed');
        }).catch(error => {
            callback('failed');
        })
}