import config from "config";
import makeRequest from "./services/http/http-service";

const technologies = config.get('techList');

function generateUrl(tech) {
    let baseUrl = config.get('end_point.base_url');
    return baseUrl + '?' + 'text=' + tech;
}

async function startCrawling(tech) {

    let url = generateUrl(tech);

    let response = await makeRequest(url);

    let {found} = JSON.parse(response);

    return {found: found}

}

export default async function run(connection_data) {

    let {db} = connection_data;

    for (let tech of technologies) {
        try {
            const techCrawledData = await startCrawling(tech);
            db.collection("technologies").insertOne({tech: tech, ...techCrawledData, date: new Date()})
        } catch (e) {
            throw e
        }
    }

    console.log(`Crawling is finished ${technologies.length} amount of technologies were added at ${new Date}`);

    return connection_data
}