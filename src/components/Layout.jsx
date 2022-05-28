import { Pane } from 'evergreen-ui';
export const Layout = ({ children }) => {
	return (
		<Pane className='App' background='blue50' padding={32} marginBottom={16}>
			{children}
		</Pane>
	);
};
