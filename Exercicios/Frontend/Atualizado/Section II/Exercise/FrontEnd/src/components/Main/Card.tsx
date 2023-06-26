import { PropsReturn } from '../../types/CardProps';

export const Card = ({ cardInfo }: PropsReturn) => {
	console.log(cardInfo)
	const { info, index } = cardInfo;
	
	const { city, country, visited = false, imageUrl } = info;
	return (
		<div className={`card card-${index}`}>
			<img src={imageUrl} alt={city} />
			<div className='card-text'>
				<h2>{city}</h2>
				<h3>{country}</h3>
				{visited ? <p>Já Fui!</p> : <p style={{ color: 'red' }}>Não Fui.</p>}
			</div>
		</div>
	);
};
