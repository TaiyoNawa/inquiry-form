import './App.css';
import { Pane } from 'evergreen-ui';
import { Layout } from './components/Layout';
import { Form } from './components/Form';

function App() {
	return (
		<div className='App'>
			<Layout>
				<Form />
			</Layout>
		</div>
	);
}

export default App;
