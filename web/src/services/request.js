import axios from "axios";

const request = {}
const url = 'http://localhost:3000'


request.getFullData = async () => {
    let responseHip; 
    await axios.get(url + '/get-data')
    .then(function (response) {
        console.log(response.data)
        // handle success
        responseHip = response.data;
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
    return responseHip;
}

export default request;