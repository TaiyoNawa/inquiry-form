import { Pane } from 'evergreen-ui';
export const Layout = ({ children }) => {
	return (
		<Pane className='App' background='blue100' padding={80} marginBottom={16}>
			{children}
		</Pane>
	);
};
