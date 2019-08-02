const request = require('request-promise-native');

const options = (url) => {
    return {
        url: url,
        headers: {
            'User-Agent': 'request'
        }
    }
};

const makeRequest = url => {
    return request(options(url));
};

export default makeRequest