import { Restaurant } from "./Restaurant";
import { User } from "./User";

export interface Notification {
  id: string;
  content?: string;
  orderId?: string;
  receiver?: string;
  isViewed?: boolean;
  time?: string;
  restaurant?: Restaurant;
  client?: User;
}
