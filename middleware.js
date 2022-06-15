const express = require('express');
const middleware = express();
middleware.use(express.json())

const apiKeys = [
    '7BTxHCyHhzIME5TI',
    'ngfeNG1iaq9Q2PJK',
    'zaCmZA74PLKCrD8Y',
    'KwOi5vm2TYNmi8Dd',
    'edVCa1E6zDZRztaq'
];

function auth(request, response, next) {
    console.log('----I middleware----');
    console.log(`Middleware: ${request.url}`);
    console.log(`API key: ${JSON.stringify(request.headers['api-key'])}`);
    const apiKey = request.headers['api-key'];

    if (apiKey && apiKeys.includes(apiKey)) {
        next(); // Kör vidare till vald endpoint i request.url
    } else {
        const resObj = {
            error: 'Access denied! I find your lack of API-key disturbing!'
        }

        response.json(resObj);
    }
}

module.exports = { auth }