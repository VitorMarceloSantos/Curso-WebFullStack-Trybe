import CardProps from "../types/CardProps";

export default function Card({cityInfo}: CardProps) {
  const { city, country, visited = false, imageUrl } = cityInfo;
  return (
    <div className="card">
      <img src={ imageUrl } alt={ city } style={ {width: '200px'}}/>
      <div>
        <h2>{city}</h2>
        <h3>{country}</h3>
        {visited ? <p>Já Fui!</p> : <p style={{color: 'red'}}>Não Fui.</p>}
      </div>
    </div>
  );
}