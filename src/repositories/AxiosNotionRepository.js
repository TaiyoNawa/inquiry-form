//postContact関数の定義
//データをlocalhost:3001にポスト？
import axios from 'axios';

export const postContact = ({ email, name, content }) => {
	return axios.post('http://localhost:3001/api/v1/contact', {
		email,
		name,
		content,
	});
};
