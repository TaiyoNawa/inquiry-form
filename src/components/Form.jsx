import {
	Button,
	Pane,
	TextInputField,
	Label,
	Textarea,
	SendMessageIcon,
} from 'evergreen-ui';
import { useState, useMemo } from 'react';
import { AxiosNotionRepository } from '../repositories/AxiosNotionRepository';

export const Form = () => {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [content, setContent] = useState();
	const repository = useMemo(() => new AxiosNotionRepository().repository, []);

	onsubmit = async (e) => {
		e.preventDefault();
		try {
			const repo = new AxiosNotionRepository().repository;
			const res = await repo.post('/', {
				data: {
					parent: { database_id: '27291510610c417884ef1c55084c7085' },
					properties: {
						name: {
							title: [{ text: { content: 'Tuscan Kale' } }],
							email: [{ email: { content: 'test@test.com' } }],
							content: [{ text: { content: 'test' } }],
						},
					},
				},
			});
			console.log(res);
		} catch (error) {
			console.error(error);
		}

		// await repository.sendContent();
	};

	return (
		<Pane
			borderRadius='6px'
			background='white'
			border='white'
			elevation={2}
			margin='auto'
			padding={24}
			display='flex'
			maxWidth='960px'
			flexDirection='column'
		>
			<h1>Form Sample</h1>
			<Pane textAlign='left'>
				<form onSubmit={repository}>
					<TextInputField
						required
						width='100%'
						label='お名前'
						placeholder='お名前を入力してください'
						onChange={(e) => setName(e.target.value)}
					/>
					<TextInputField
						required
						type='email'
						width='100%'
						label='メールアドレス'
						placeholder='メールアドレスを入力してください'
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Pane>
						<Label htmlFor='content' marginBottom={4} display='block'>
							本文
						</Label>
						<Textarea
							required
							id='content'
							placeholder='本文を入力してください。'
							onChange={(e) => setContent(e.target.value)}
						/>
					</Pane>
					<Button
						type='submit'
						marginTop={32}
						size='large'
						iconBefore={SendMessageIcon}
					>
						送信
					</Button>
				</form>
			</Pane>
		</Pane>
	);
};
