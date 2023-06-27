import { useEffect, useState } from 'react';
import { generateNumbers } from '../../utils/generateNumbers';
export const Numbers = () => {
	const [listNumbers, setListNumbers] = useState<number[]>([]);
	useEffect(() => {
		const list = generateNumbers();
		setListNumbers(list);
	}, []);
	return (
		<section className='numbers'>
			<h3 className='numbers-title'>Os números sorteados são:</h3>
			<div className='numbers-list'>
				<p>Numbers:</p>
				<ul>
					{listNumbers.map((number) => (
						<li key={number}>
							<p>{number}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
