import run from './crawler'
import {connectToDb, close, dbConnector} from "./services/storage/db-service";

dbConnector()
    .then(connectToDb)
    .then(run)
    .then(close);





