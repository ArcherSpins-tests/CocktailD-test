import React from 'react';
import { render, screen } from '@testing-library/react';
import { DrinkCard } from './DrinkCard';

const mockDrink = {
  idDrink: '1',
  strDrink: 'Test Mojito',
  strCategory: 'Cocktail',
  strAlcoholic: 'Alcoholic',
  strGlass: 'Highball glass',
  strInstructions: 'Mix all ingredients.',
  strDrinkThumb: 'https://via.placeholder.com/150',
  strIngredient1: 'Rum',
  strMeasure1: '50ml',
  strIngredient2: 'Mint',
  strMeasure2: '10 leaves',
  strIngredient3: null,
};

describe('DrinkCard', () => {
  it('renders drink details correctly', () => {
    render(<DrinkCard drink={mockDrink} />);
    expect(screen.getByText('Test Mojito')).toBeInTheDocument();
    expect(screen.getByText(/Cocktail/)).toBeInTheDocument();
    expect(screen.getByText(/Mix all ingredients/)).toBeInTheDocument();
    expect(screen.getByText(/50ml Rum/)).toBeInTheDocument();
    expect(screen.getByText(/10 leaves Mint/)).toBeInTheDocument();
  });
});
