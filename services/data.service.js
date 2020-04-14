import {mongoConnector, close, connectToDb, getAllData} from "./storage/db-service";
import run from './../crawler'

let parsedData = {}
 
parsedData.getAllData = async function (req, res){
    await mongoConnector()
        .then(connectToDb)
        .then(getAllData)
        .then(close)
        .then((data) => {
            res.send(data)
        })
}

parsedData.takeNewData = async function (req, res){ 
    mongoConnector()
        .then(connectToDb)
        .then(run)
        .then(close)
        .then(res.json({ success: true }))
        .catch(err => res.json({ success: false, error: err}))
}

export default parsedData;