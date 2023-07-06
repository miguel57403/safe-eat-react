import { MailOutlined } from "@ant-design/icons";
import DeliveryIcon from "@mui/icons-material/DeliveryDining";
import GridViewIcon from "@mui/icons-material/GridView";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ScienceIcon from "@mui/icons-material/Science";
import { MenuProps } from "antd";
import { getItem } from "utils/getItemMenu";

export const itemMocked: MenuProps["items"] = [
  getItem("Dashboard", "", <MailOutlined />),
  { type: "divider" },
  getItem("Orders", "orders", <ReceiptIcon />),
  { type: "divider" },
  getItem("Products", "products", <InventoryIcon />),
  { type: "divider" },
  getItem("Ingredients", "ingredients", <ScienceIcon />),
  { type: "divider" },
  getItem("Deliveries", "deliveries", <DeliveryIcon />),
  { type: "divider" },
  getItem("Sections", "sections", <GridViewIcon />),
];
