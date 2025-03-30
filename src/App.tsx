import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DrinkPage from './pages/DrinkPage/DrinkPage';
import NotFound from './pages/NotFound/NotFound';

export const cocktails = ['margarita', 'mojito', 'a1', 'kir'];

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${cocktails[0]}`} replace />} />
      {cocktails.map((name) => (
        <Route
          key={name}
          path={`/${name}`}
          element={<DrinkPage cocktailCode={name} />}
        />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
