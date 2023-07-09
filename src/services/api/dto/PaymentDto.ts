export interface PaymentDto {
  id?: string;
  type?: string;
  name?: string;
  number?: number;
  expirationDate?: string;
  cvv?: number;
}
