import { render, screen } from '@testing-library/react';
import App from '../App';

// 3 A's: Acessar, agir, aferir
describe('<Header />', () => {
	it('should verify title', () => {
		// Acessar: os elementos na tela
		render(<App />); // Renderizando o componente na tela
		const title = screen.getByText('Tô Viajando?');

		// Agir: interegir(clicar no botão, preencher input, ...) com os elementos na tela

		// Aferir: conferir o resultado esperado como resultado obtido
		expect(title).toBeInTheDocument(); // Verificar se o elemento está na tela
		expect(title.textContent).toBe('Tô Viajando?'); // Recebendo o texto que contem no elemento title, e comparando ele

		// expect(title)
	});
});
