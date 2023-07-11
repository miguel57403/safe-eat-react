import { Uuid } from "services/api";
import { OrderDto } from "services/api/dto/OrderDto";

export interface IOrdersRequest {
    id?: string;
    Orders: OrderDto 
}