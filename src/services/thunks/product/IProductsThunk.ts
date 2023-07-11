import { Uuid } from "services/api";
import { Product } from "services/api/models/Product";

export interface IProductRequest {
    id: Uuid,
    product: Product
}