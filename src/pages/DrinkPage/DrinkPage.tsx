import React, { useEffect } from 'react';
import { useDrinkStore } from '../../store/useDrinkStore';
import { Sidebar, DrinkCard, Spinner } from '../../components';
import './DrinkPage.scss';

interface DrinkPageProps {
  cocktailCode: string;
}

const DrinkPage: React.FC<DrinkPageProps> = ({ cocktailCode }) => {
  const { drinks, fetchDrinks, loading, error } = useDrinkStore();

  useEffect(() => {
    fetchDrinks(cocktailCode);
  }, [cocktailCode]);

  const cocktailList = drinks[cocktailCode];

  const renderContent = () => {
    if (loading) {
      return <Spinner />;
    }

    return (
      <>
        {error && <p>Error: {error}</p>}
        {cocktailList &&
          cocktailList.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
      </>
    );
  };

  return (
    <div className="layout">
      <Sidebar />
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default DrinkPage;
