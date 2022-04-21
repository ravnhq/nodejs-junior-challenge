const axios = require('axios');

const challengeUrl = process.argv[2];
const token = process.argv[3];

const challengeData = {
    'challengeUrl': 'https://github.com/deeiqh/nodejs-challenge',
    'token': token
};

axios.post(challengeUrl, challengeData)
    .then( res => {
        console.log('status: ', res.status);
        console.log('body: ', res.data);
    }).catch( err => {
        console.log(err);
    });