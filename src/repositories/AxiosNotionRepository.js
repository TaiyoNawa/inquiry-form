import Axios from 'axios';

export class AxiosNotionRepository {
	repository;
	constructor() {
		this.repository = Axios.create({
			baseURL: 'https://api.notion.com/v1/pages',
			headers: {
				Authorization: `Bearer secret_jM31fFryeyMrvYl18F68xJ9sXnHAJ8KlnI0WRpXk3gn`,
				'Notion-Version': '2022-02-22',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
			timeout: 2000,
			data: {
				parent: { database_id: '27291510610c417884ef1c55084c7085' },
				properties: {},
			},
		});
	}

	send() {
		return this.repository.post('/', {
			data: {
				properties: {
					name: {
						title: [{ text: { content: 'Tuscan Kale' } }],
						email: [{ email: { content: 'test@test.com' } }],
						content: [{ text: { content: 'test' } }],
					},
				},
			},
		});
	}
}
