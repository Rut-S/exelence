import axios from 'axios'

export function getBanksList(setBanks) {
   
    axios.get(`https://www.xnes.co.il/ClosedSystemMiddlewareApi/api/generalinformation`)
    .then((response) => {
            return response.data.Data;
        }).then(response=>{
            setBanks(response);
        })
}