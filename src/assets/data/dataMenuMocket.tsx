import { MailOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import { getItem } from "utils/getItemMenu";

export const itemMocked: MenuProps["items"] = [
  getItem("Dashboard", "", <MailOutlined />),
  { type: "divider" },
  getItem("Orders", "orders", <MailOutlined />),
  { type: "divider" },
  getItem("Products", "products", <MailOutlined />),
  { type: "divider" },
  getItem("Ingredients", "ingredients", <MailOutlined />),
  { type: "divider" },
  getItem("Deliveries", "deliveries", <MailOutlined />),
  { type: "divider" },
  getItem("Sections", "sections", <MailOutlined />),
];
