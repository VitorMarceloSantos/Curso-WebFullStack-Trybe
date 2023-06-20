import Card from './Card.js';

const informations = [
  {
    city: 'Rio de Janeiro',
    country: 'Brasil',
    imageUrl: '/src/assets/rio.jpg',
    visited: true,
  },
  {
    city: 'Cidade do Cabo',
    country: 'África do Sul',
    imageUrl: '/src/assets/cidade-do-cabo.jpg',
    visited: true,
  },
  {
    city: 'Acapulco',
    country: 'México',
    imageUrl: '/src/assets/acapulco.jpeg',
  }
]

function CardList() {
  return (
    <>
    {
      informations.map((cityInfo) => (
        <Card
          cityInfo={cityInfo}
        />
      ))
    }
    </>
  )
}

export default CardList