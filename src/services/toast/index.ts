import { toast } from "react-toastify";

const toastMessage: any = {
  200: toast.success,
  400: toast.error,
  300: toast.warning,
  0: undefined,
};

const isValid = (status: number) => {
  return Object.keys(toastMessage).indexOf(status.toString()) !== -1;
};

export const toastByCode = (status: number, message: string) => {
  if (isValid(status)) toastMessage[status](message);
};
