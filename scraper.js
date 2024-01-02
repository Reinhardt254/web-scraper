// npm install axios
const axios = require('axios');

const url = process.env.WEBSITELINK;

const apikey = process.env.APIKEY;

axios({
	url: 'https://api.zenrows.com/v1/',
	method: 'GET',
	params: {
		'url': url,
		'apikey': apikey,
	},
})
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
