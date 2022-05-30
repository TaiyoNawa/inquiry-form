const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { fetchDatabase, createPage } = require('./lib/notion');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', async (req, res, next) => {
	const data = await fetchDatabase();

	return res.json({ message: 'OK!', data });
});
app.post('/api/v1/contact', async (req, res, next) => {
	const { name, email, content } = req.body;
	console.log(name, email, content, req.body);
	try {
		await createPage({
			email,
			name,
			content,
		});
		return res.json({ message: 'OK' });
	} catch (error) {
		return res.status(500).json({ message: 'error', errors: error.message });
	}
});

app.listen(3001, () => console.log('listen port 3001'));
