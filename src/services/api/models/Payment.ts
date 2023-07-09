export interface Payment {
  id: string;
  type?: string;
  name?: string;
  number?: number;
  expirationDate?: string;
  cvv?: number;
  isSelected?: boolean;
}
