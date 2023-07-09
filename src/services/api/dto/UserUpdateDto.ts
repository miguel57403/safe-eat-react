export interface UserUpdateDto {
  password?: string;
  name?: string;
  email?: string;
  cellphone?: string;
  restrictionIds?: string[];
}
