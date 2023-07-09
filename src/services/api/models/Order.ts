import { Address } from "./Address";
import { Item } from "./Item";
import { Delivery } from "./Delivery";
import { Payment } from "./Payment";
import { Restaurant } from "./Restaurant";
import { User } from "./User";

export interface Order {
  id: string;
  status?: string;
  time?: string;
  subtotal?: number;
  total?: number;
  quantity?: number;
  address?: Address;
  payment?: Payment;
  delivery?: Delivery;
  items?: Item[];
  feedbackId?: string;
  restaurant?: Restaurant;
  client?: User;
}
