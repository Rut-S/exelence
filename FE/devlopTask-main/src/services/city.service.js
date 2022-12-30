import axios from 'axios'

export function getCities(setCities) {

    axios.get(`http://localhost:2094/city/getAllCities`)
        .then((response) => {
            console.log(response);
            return response.data;
        }).then(response => {
            setCities(response);
        })
}