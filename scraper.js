// npm install axios
const axios = require('axios');

const url = 'https://springfield.craigslist.org/search/eminence-mo/ggg?bundleDuplicates=1&is_paid=yes&lat=37.1473&lon=-91.5079&postedToday=1&query=online%20studies%20study%20research%20survey&search_distance=1000&sort=rel#search=1~thumb~0~0';
const apikey = '6a9699315b0dd29d15188930988bffbebfab750f';
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

	//  https://stlouis.craigslist.org/search/cuba-mo/ggg?bundleDuplicates=1&lat=38.2043&lon=-91.4262&postedToday=1&query=paid%20online%20studies%20research&search_distance=1000&sort=rel#search=1~thumb~0~0
