import { Uuid } from "services/api";

export interface INotificationRequest {
  id: Uuid;
  notification?: Notification;
}
