import { AddressesEndpoint } from "./endpoints/addresses.endpoint";
import { AdvertisementsEndpoint } from "services/api/endpoints/advertisements.endpoint";
import { AuthEndpoint } from "./endpoints/auth.endpoint";
import { CartsEndpoint } from "./endpoints/carts.endpoint";
import { CategoriesEndpoint } from "./endpoints/categories.endpoint";
import { DeliveriesEndpoint } from "./endpoints/deliveries.endpoint";
import { FeedbacksEndpoint } from "./endpoints/feedbacks.endpoint";
import { HttpClient } from "./types";
import { IngredientsEndpoint } from "./endpoints/ingredients.endpoint";
import { ItemsEndpoint } from "./endpoints/items.endpoint";
import { NotificationsEndpoint } from "./endpoints/notifications.endpoint";
import { OrdersEndpoint } from "./endpoints/orders.endpoint";
import { PaymentsEndpoint } from "./endpoints/payments.endpoint";
import { ProductsEndpoint } from "./endpoints/products.endpoint";
import { ProductSectionsEndpoint } from "./endpoints/productSections.endpoint";
import { RestaurantsEndpoint } from "./endpoints/restaurants.endpoint";
import { RestaurantSectionSectionsEndpoint } from "./endpoints/restaurantSections.endpoint";
import { RestrictionsEndpoint } from "./endpoints/restrictions.endpoint";
import { UsersEndpoint } from "./endpoints/users.endpoint";

class ApiJWT {
  constructor(public httpClient: HttpClient) {}

  setToken(token: string) {
    this.httpClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  removeToken() {
    delete this.httpClient.defaults.headers.common.Authorization;
  }
}

export class Api extends ApiJWT {
  addresses = new AddressesEndpoint(this.httpClient);
  advertisements = new AdvertisementsEndpoint(this.httpClient);
  auth = new AuthEndpoint(this.httpClient);
  carts = new CartsEndpoint(this.httpClient);
  categories = new CategoriesEndpoint(this.httpClient);
  deliveries = new DeliveriesEndpoint(this.httpClient);
  feedbacks = new FeedbacksEndpoint(this.httpClient);
  ingredients = new IngredientsEndpoint(this.httpClient);
  items = new ItemsEndpoint(this.httpClient);
  notifications = new NotificationsEndpoint(this.httpClient);
  orders = new OrdersEndpoint(this.httpClient);
  payments = new PaymentsEndpoint(this.httpClient);
  products = new ProductsEndpoint(this.httpClient);
  productSections = new ProductSectionsEndpoint(this.httpClient);
  restaurants = new RestaurantsEndpoint(this.httpClient);
  restaurantSections = new RestaurantSectionSectionsEndpoint(this.httpClient);
  restrictions = new RestrictionsEndpoint(this.httpClient);
  users = new UsersEndpoint(this.httpClient);
}
