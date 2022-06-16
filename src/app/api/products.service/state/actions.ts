import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/shared/models/product';

export const actions = {
  ADDFAV: createAction('[FAVS] Add to Favorites', props<IProduct>()),
  REMOVEFAV: createAction('[FAVS] Remove from Favorites', props<IProduct>()),
  ADDCART: createAction('[CART] Add to Cart', props<IProduct>()),
  REMOVECART: createAction('[CART] Remove from Cart', props<IProduct>()),
};
