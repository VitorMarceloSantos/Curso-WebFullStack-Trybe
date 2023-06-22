import { render, screen } from '@testing-library/react';
import { CardList } from '../components/CardList';

describe('< CardList />', () => {
	it('should verify card', () => {
		render(<CardList />);
		// Pode passar props no render
		// render(<Card cityInfo={information}  />)
		//Acessar
		const listDiv: [] = [];
		for (let i = 0; i < 3; i += 1) {
			listDiv.push(screen.getByTestId(`div-${i}`));
		}

		// Agir

		// Aferir
		expect(listDiv).toHaveLength(3);
	});
});
