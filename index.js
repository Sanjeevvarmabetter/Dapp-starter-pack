const express = require('express');

const axios = require('axios');


const app = express();

const dotenv = require('dotenv');

dotenv.config();



const port = 5500;


const apiKey = process.env.API_KEY;

const newsApiUrl = 'https://newsapi.org/v2/top-headlines';
//
//


app.get('/news',async(req,res) => {
	try {
		const response = await axios.get(newsApiUrl, {
			params: {
				apiKey: apiKey,
				contry:'us',
				category: 'general',
				pageSize: 5
			}
		});


		res.json(response.data);
	}catch(err) {
		console.log(err);
		res.status(500).send('error');
	}
});

app.listen(port,() => {
	console.log(`Server running on port${port} `);
});
