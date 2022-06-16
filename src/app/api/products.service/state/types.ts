export interface AppState {
  cart: IProduct[];
  favorites: IProduct[];
}

export interface IProduct {
  id: number;
  name: string;
  img: string;
  price: string;
}
