import { state } from '@angular/animations';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './types';

export const featureSelectors = {
  getCart: createFeatureSelector('cart'),
  getFavorites: createFeatureSelector('favorites'),
};

export const selectors = {
  getCartItems: createSelector(featureSelectors.getCart, (cart) => cart),
  getFavoriteItems: createSelector(
    featureSelectors.getFavorites,
    (favorites) => favorites
  ),
};
