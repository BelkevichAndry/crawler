import makeRequest from './services/http-service'
import client from './services/reddis'

const allVacancies = 'https://api.hh.ru/vacancies?text=java&per_page=100&page=1';


async function get(page) {
    const requestURL = `${'https://api.hh.ru/vacancies?text=java&per_page=100&page=' + page }`;
    let parsedData;
    const frequency = [];
    try {
        const data = await makeRequest(requestURL);
        parsedData = JSON.parse(data);
        for (let item of parsedData.items) {
            let result = await makeRequest(item.url);
            const parsedRes = JSON.parse(result);
            parsedRes.key_skills.forEach(skill => {
                    frequency.push(skill);
            })
        }
        return frequency;
    }
    catch (e) {
        throw e
    }
}

const init = async () => {

    const res = await makeRequest(allVacancies);
    const parserRes = JSON.parse(res);
    const result = [];
    const frequency = {};
    const pages = parserRes.pages;
    for(let i = 1;i <2;i++){
        console.log(i);
         let data = await get(i);
         result.push(data);
    }
    const flat = result.flatten(2);
    flat.forEach(skill => {
        if (skill.name in frequency) {
            frequency[skill.name]++;
        }
        else {
            frequency[skill.name] = 1;
        }
    });
    const sorted = sortAssocObject(frequency);

};

function sortAssocObject(list) {
    var sortable = [];
    for (var key in list) {
        sortable.push([key, list[key]]);
    }

    sortable.sort(function(a, b) {
        return (a[1] > b[1] ? -1 : (a[1] < b[1] ? 1 : 0));
    });

    var orderedList = {};
    for (var i = 0; i < sortable.length; i++) {
        orderedList[sortable[i][0]] = sortable[i][1];
    }

    return orderedList;
}
init();