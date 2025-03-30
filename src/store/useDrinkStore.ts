import { create } from 'zustand';
import { CocktailD } from '../types/cocktail';

interface DrinkState {
  drinks: Record<string, CocktailD['drinks']>;
  loading: boolean;
  error: string | null;
  fetchDrinks: (cocktailCode: string) => Promise<void>;
}

export const useDrinkStore = create<DrinkState>((set, get) => ({
  drinks: {},
  loading: false,
  error: null,
  fetchDrinks: async (cocktailCode: string) => {
    const cached = get().drinks[cocktailCode];
    if (cached) return;

    set({ loading: true, error: null });
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailCode}`
      );
      const data = await res.json();
      if (data.drinks) {
        set((state) => ({
          drinks: { ...state.drinks, [cocktailCode]: data.drinks },
          loading: false,
        }));
      } else {
        throw new Error('No drinks found');
      }
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));
