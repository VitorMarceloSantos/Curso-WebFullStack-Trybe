import { screen, render } from '@testing-library/react';
import { Numbers } from '../components/Main/Numbers';

describe('<LottoNumber - <Numbers />', () => {
	it('should verify return <LottoNumbers />', () => {
		render(<Numbers />);
		//Acessar
		const title = screen.getByRole('heading', { level: 3, name: 'Os números sorteados são:' });
		const lines = screen.getAllByRole('listitem');
		//Agir
		//Aferir
		expect(title).toBeInTheDocument();
		expect(title.textContent).toBe('Os números sorteados são:');
		// Lista
		expect(lines).toHaveLength(6);
	});
});
