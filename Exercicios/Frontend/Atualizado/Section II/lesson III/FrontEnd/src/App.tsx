import { Title } from './components/Header/Title';
import { LottoNumbers } from './components/Main/LottoNumbers';
import './css/main.css'
function App() {
	return (
		<div className='container-app'>
			<header>
				<Title />
			</header>
			<main>
				<LottoNumbers />
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
