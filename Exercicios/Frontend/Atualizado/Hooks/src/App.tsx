import { HeaderTitle } from './components/Header/HeaderTitle';
import { Missions } from './components/Main/Missions';
import { Planets } from './components/Main/Planets';
import { MissionsProvider } from './context/MissionsProvider';
import { PlanetsProvider } from './context/PlanetsProvider';
import '../src/css/styles.css';

function App() {
	return (
		<>
			<header>
				<HeaderTitle />
			</header>
			<main>
				{/* Cada componente terá acesso somente ao provider que fará uso */}
				<PlanetsProvider>
					<Planets />
				</PlanetsProvider>
				<MissionsProvider>
					<Missions />
				</MissionsProvider>
			</main>
			<footer></footer>
		</>
	);
}

export default App;
