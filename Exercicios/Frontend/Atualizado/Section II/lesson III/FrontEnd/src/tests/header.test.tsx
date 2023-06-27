import { render, screen } from '@testing-library/react';
import { Title } from '../components/Header/Title';
describe('<Header />', () => {
	it('should verify title', () => {
		render(<Title />)
    //Acessar
    const title = screen.getByRole('heading', {level: 1, name: 'Gerador de Números'})
    //Agir
    //Aferir
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe('Gerador de Números')
	});
});
