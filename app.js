import run from './crawler'
import {mongoConnector, close, connectToDb, getAllData} from "./services/storage/db-service";
import express from "express";

const app = express();

// mongoConnector()
//     .then(connectToDb)
//     .then(run)
//     .then(close);

app.get('/get-data', async function (req, res) {

    await mongoConnector()
    .then(connectToDb)
    .then(getAllData)
    .then(close)
    .then( (data) => {res.send(data)})
})




app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
