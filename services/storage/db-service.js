const MongoClient = require('mongodb').MongoClient;
const config = require('config');

const URL = config.get('db.url');
const DB_NAME = config.get('db.name');

export function mongoConnector() {
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

export async function close(connection_data){
    let {client, data} = connection_data;
    await client.close();
    return data;
}

export async function getAllData(connection_data){
    let {db} = connection_data;
    try {
        let data = await db.collection("technologies").find({}).toArray();
        return {data: data, client: connection_data.client};
    } catch (e) {
        throw e
    }
}
