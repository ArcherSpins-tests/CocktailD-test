import React from 'react';
import './DrinkCard.scss';
import { Drink } from '../../locale-types/drink';

interface DrinkCardProps {
  drink: Drink;
}

export const DrinkCard: React.FC<DrinkCardProps> = ({ drink }) => {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = drink[`strIngredient${i}`];
    const measure = drink[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push({ ingredient, measure });
    } else {
      break;
    }
  }

  return (
    <div className="drink-card">
      <div className="drink-details">
        <h2>{drink.strDrink}</h2>
        <div className="drink-content-list">
          <p>
            <strong>{drink.strCategory}</strong> | {drink.strAlcoholic} |{' '}
            {drink.strGlass}
          </p>
          <p>
            <strong>Instructions:</strong> {drink.strInstructions}
          </p>
          <p>
            <strong>Ingredients:</strong>
          </p>
          <ul>
            {ingredients.map((item, idx) => (
              <li key={idx}>
                {item.measure || ''} {item.ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="drink-thumb">
        <img
          src={drink.strDrinkThumb || ''}
          alt={drink.strDrink || ''}
          loading="lazy"
        />
      </div>
    </div>
  );
};
