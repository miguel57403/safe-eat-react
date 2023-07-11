import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { Avatar, Badge, Button, Card, Col } from "antd";
import { useAppDispatch, useAppSelector } from "app/store";
import { FontsDefault } from "assets/fonts/Fonts";
import { StyledNotification } from "components/SidebarRight/styled";
import { useEffect } from "react";
import { fetchThunkNotificationByRestaurant } from "services/thunks/notification/_thunkGet";

interface INotification {
  time: string;
  description: string;
  user: {
    name: string;
    picture: string;
  };
}

const itemsNotification: INotification[] = [
  {
    time: "2022-03-03",
    description: "This is the notification",
    user: {
      name: "John Smith",
      picture:
        "https://images02.military.com/sites/default/files/2021-04/chucknorris.jpeg",
    },
  },
  {
    time: "2022-03-03",
    description: "This is the notification",
    user: {
      name: "John Smith",
      picture:
        "https://images02.military.com/sites/default/files/2021-04/chucknorris.jpeg",
    },
  },
];

export const SidebarRight = () => {
  const notifications =
    useAppSelector((state) => state.notification.notifications) || [];
  const restaurant = useAppSelector(
    (state) => state.restaurants.mainRestaurant
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (restaurant) {
      dispatch(fetchThunkNotificationByRestaurant(restaurant.id));
    }
  }, []);
  
  return (
    <StyledNotification>
      <FontsDefault.H1
        className="title-notification"
        fontsWeight={400}
        fontsSize={18}
        color="white"
        style={{ display: "flex", alignItems: "baseline", gap: "5px" }}
      >
        <NotificationsIcon style={{ fontSize: "16px" }} />
        Notifications
      </FontsDefault.H1>
      <div className="card-notification">
        {notifications &&
          notifications.map((notification: any, index: any) => (
            <Col key={index}>
              <Card
                hoverable
                title={
                  <div
                    style={{
                      display: "flex",
                      margin: "10px 0",
                      gap: 10,
                    }}
                  >
                    <Badge dot={true} color={"blue"}>
                      <Avatar size={40} src={notification.user?.picture} />
                    </Badge>
                    <FontsDefault.H6
                      fontsWeight={500}
                      color="black"
                      style={{ flexGrow: 1 }}
                    >
                      {notification.user?.name}
                    </FontsDefault.H6>
                  </div>
                }
                style={{ padding: 0, margin: 0 }}
                bordered={false}
                extra={
                  <Button icon={<DeleteOutlineIcon />} type={"text"} danger />
                }
              >
                <FontsDefault.P1 color="gray" fontsWeight={300}>
                  {notification.time}
                </FontsDefault.P1>
                {notification.description}
              </Card>
            </Col>
          ))}
      </div>
    </StyledNotification>
  );
};
