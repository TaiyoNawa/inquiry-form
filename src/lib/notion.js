require('dotenv').config();
const { Client } = require('@notionhq/client');

// Initializing a client
const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

const fetchDatabase = () =>
	notion.databases.query({
		database_id: '27291510610c417884ef1c55084c7085',
	});

module.exports = {
	notion,
	fetchDatabase,
};
