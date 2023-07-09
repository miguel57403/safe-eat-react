import { Item } from "../models/Item";
import { Address } from "../models/Address";
import { Delivery } from "../models/Delivery";
import { Payment } from "../models/Payment";

export interface OrderDraftDto {
  addresses: Address[];
  deliveries: Delivery[];
  payments: Payment[];
  items: Item[];
  subtotal: number;
  quantity: number;
}
