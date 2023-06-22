import { CardList } from './components/CardList';
import { Header } from './components/Header/Header';
import './css/main.css'

function App() {
	return (
		<div className='container-app'>
			<header>
				<Header />
			</header>
			<main>
				<CardList />
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
