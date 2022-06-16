import { createReducer, on } from '@ngrx/store';
import { actions } from './actions';
import { appState } from './state';
import { AppState, IProduct } from './types';

export const cartReducer = createReducer(
  appState,
  on(actions.ADDCART, <T extends AppState>(state: T, item: IProduct): T => {
    const newState: T = { ...state, cart: [...state.cart, item] };
    return newState;
  }),
  on(actions.REMOVECART, <T extends AppState>(state: T, item: IProduct): T => {
    const newState: T = {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== item.id),
    };
    return newState;
  }),
  on(actions.ADDFAV, <T extends AppState>(state: T, item: IProduct): T => {
    const newState: T = { ...state, favorites: [...state.favorites, item] };

    return newState;
  }),
  on(actions.REMOVEFAV, <T extends AppState>(state: T, item: IProduct): T => {
    const newState: T = {
      ...state,
      favorites: state.favorites.filter((favItem) => favItem.id !== item.id),
    };

    return newState;
  })
);
