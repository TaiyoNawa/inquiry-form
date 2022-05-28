const express = require('express');
const bodyParser = require('body-parser');

const { fetchDatabase } = require('./lib/notion');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', async (req, res, next) => {
	const data = await fetchDatabase();
	return res.json({ message: 'OK!', data });
});
app.post('/contact', (req, res, next) => {});

app.listen(3000, () => console.log('listen port 3000'));
