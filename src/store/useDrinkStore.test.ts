import { act } from '@testing-library/react';
import { useDrinkStore } from './useDrinkStore';

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        drinks: [{ idDrink: '1', strDrink: 'Test Drink' }],
      }),
  })
) as jest.Mock;

describe('useDrinkStore', () => {
  it('fetches and stores drinks data', async () => {
    await act(async () => {
      await useDrinkStore.getState().fetchDrinks('mojito');
    });

    const state = useDrinkStore.getState();
    expect(state.drinks['mojito']).toBeDefined();
    expect(state.drinks['mojito'][0].strDrink).toBe('Test Drink');
  });
});