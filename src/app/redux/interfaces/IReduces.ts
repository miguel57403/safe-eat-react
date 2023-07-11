import { Address } from "services/api/models/Address";
import { Advertisement } from "services/api/models/Advertisement";
import { Cart } from "services/api/models/Cart";
import { Order } from "services/api/models/Order";
import { Product } from "services/api/models/Product";
import { Restaurant } from "services/api/models/Restaurant";
import { User } from "services/api/models/User";

interface IGlobalReducer {
  loading: boolean;
  status: number | undefined;
  error:
    | {
        message: string;
      }
    | undefined;
  operations: string | undefined;
  message: string | undefined;
  rowCount: number;
}

export interface IAuthReducer extends IGlobalReducer {
  token: string | undefined;
  userAuth: User | undefined;
}

export interface IAddressReducer extends IGlobalReducer {
  address: Address | undefined;
}

export interface IOrdersReducer extends IGlobalReducer {
  orders: Order[] | undefined;
}

export interface IRestaurantsReducer extends IGlobalReducer {
  mainRestaurant: Restaurant | undefined;
  restaurants: Restaurant | undefined;
}

export interface ICartReducer extends IGlobalReducer {
  cart: Cart | undefined;
}

export interface IAdvertisementsReducer extends IGlobalReducer {
  advertisement: Advertisement[] | undefined;
}

export interface IProductsReducer extends IGlobalReducer {
  products: Product[] | undefined;
}

export interface INotificationsReducer extends IGlobalReducer {
  notifications: any | undefined;
}
