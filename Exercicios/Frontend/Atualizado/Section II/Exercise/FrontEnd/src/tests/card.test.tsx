import { render, screen } from "@testing-library/react";
import { Card } from "../components/Card";

describe('<Card />', () => {
  // // Mock Informations
const information = {
    city: 'Rio de Janeiro',
    country: 'Brasil',
    imageUrl: '/src/assets/rio.jpg',
    visited: true,
  };

  it('should verify components', () => {
    render(<Card cityInfo={information}/>)
    // Acessar
    const verifyTitle = screen.getByRole('heading', {level:2, name:'Rio de Janeiro'})
    const verifyCountry = screen.getByText('Brasil')
    const verifyImg = screen.getByRole('img')
    const verifyVisited = screen.getByText(/Já Fui!/i)
    
    // Agir

    // Aferir
    // Titulo
    expect(verifyTitle).toBeInTheDocument();
    expect(verifyTitle.textContent).toBe('Rio de Janeiro')
    // País
    expect(verifyCountry).toBeInTheDocument();
    expect(verifyCountry.textContent).toBe('Brasil')
    // Imagem
    expect(verifyImg).toBeInTheDocument();
    expect(verifyImg).toHaveAttribute('src', '/src/assets/rio.jpg')
    // Texto
    expect(verifyVisited).toBeInTheDocument();
  });
});
