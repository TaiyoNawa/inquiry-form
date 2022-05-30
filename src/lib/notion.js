require('dotenv').config();
const { Client } = require('@notionhq/client');

const DATABASE_ID = '27291510610c417884ef1c55084c7085';
// Initializing a client
const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

const fetchDatabase = () =>
	notion.databases.query({
		database_id: DATABASE_ID,
	});

const createPage = ({ email, name, content }) => {
	return notion.pages.create({
		parent: {
			database_id: DATABASE_ID,
		},
		properties: {
			name: {
				title: [
					{
						text: {
							content: name,
						},
					},
				],
			},
			email: {
				email,
			},
			content: {
				rich_text: [
					{
						text: {
							content,
						},
					},
				],
			},
		},
	});
};
module.exports = {
	notion,
	fetchDatabase,
	createPage,
};
