import { Avatar, Card, Col } from "antd";
import { FontsDefault } from "assets/fonts/Fonts";
import { StyledNotification } from "components/Notification/styled";
import NotificationsIcon from "@mui/icons-material/Notifications";

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

export const Notifications = () => {
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
        {itemsNotification.map((notification) => (
          <Col>
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
                  <Avatar size={40} src={notification.user.picture} />
                  <FontsDefault.H6
                    fontsWeight={500}
                    color="black"
                    style={{ flexGrow: 1 }}
                  >
                    {notification.user.name}
                  </FontsDefault.H6>
                </div>
              }
              style={{ padding: 0, margin: 0 }}
              bordered={false}
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
