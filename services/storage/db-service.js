const MongoClient = require('mongodb').MongoClient;
const config = require('config');

const URL = config.get('db.url_docker');
const DB_NAME = config.get('db.name');

export  function mongoConnector() {
    return MongoClient.connect(URL, {useNewUrlParser: true})
        .then(mongoClient => {
            console.log("Connection to DB established");
            return mongoClient
        })
        .catch(err=>{
            throw err
        })
}


export function connectToDb(client){
    return {db: client.db(DB_NAME), client: client}

}

export function close(connection_data){
    let {client} = connection_data;
    return client.close();
}