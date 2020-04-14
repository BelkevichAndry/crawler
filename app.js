import run from './crawler'
import {mongoConnector, close, connectToDb} from "./services/storage/db-service";


mongoConnector()
    .then(connectToDb)
    .then(run)
    .then(close);

