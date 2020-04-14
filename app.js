import run from './crawler'
import router from './routes/routes'
import {mongoConnector, close, connectToDb, getAllData} from "./services/storage/db-service";
import express from "express";

const app = express();

// mongoConnector()
//     .then(connectToDb)
//     .then(run)
//     .then(close);

app.use(router)

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
