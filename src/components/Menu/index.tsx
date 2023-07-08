import {
  AntDesignOutlined,
  LogoutOutlined,
  ShopOutlined,
  MailOutlined,
} from "@ant-design/icons";
import DeliveryIcon from "@mui/icons-material/DeliveryDining";
import GridViewIcon from "@mui/icons-material/GridView";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ScienceIcon from "@mui/icons-material/Science";
import { Avatar, Menu, MenuProps, Dropdown } from "antd";
import { FontsDefault } from "assets/fonts/Fonts";
import { StyleMenu } from "components/Menu/style";
import { IGlobalAttribute } from "interfaces/IGlobalAttribute";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "assets/images/logo-restaurants.svg";
import React from "react";

export const MenuSafeEat: React.FC<IGlobalAttribute> = ({ ...props }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const items: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ShopOutlined />,
      onClick: () => {
        navigate("/profile");
      },
    },
    {
      label: "Logout",
      key: "logout",
      icon: <LogoutOutlined />,
      onClick: () => {
        navigate("/login");
      },
    },
  ];

  return (
    <StyleMenu {...props}>
      <img src={logo} style={{ padding: "12px 34px" }} />
      <Menu
        onClick={(e) => navigate(`${e.key}`)}
        className="section-menu"
        selectedKeys={[location.pathname]}
        mode="vertical"
        items={sidebarItems}
      />
      <div className="footer-menu">
        <Dropdown menu={{ items }} trigger={["click"]}>
          <Avatar
            style={{ cursor: "pointer" }}
            size={40}
            icon={<AntDesignOutlined />}
            shape="square"
          />
        </Dropdown>
        <FontsDefault.P1 color="white" fontsSize={16}>
          Galinha da vizinha
        </FontsDefault.P1>
      </div>
    </StyleMenu>
  );
};

export const sidebarItems: MenuProps["items"] = [
  { label: "Dashboard", key: "/dashboard", icon: <MailOutlined /> },
  { type: "divider" },
  { label: "Orders", key: "/orders", icon: <ReceiptIcon /> },
  { type: "divider" },
  { label: "Products", key: "/products", icon: <InventoryIcon /> },
  { type: "divider" },
  { label: "Ingredients", key: "/ingredients", icon: <ScienceIcon /> },
  { type: "divider" },
  { label: "Deliveries", key: "/deliveries", icon: <DeliveryIcon /> },
  { type: "divider" },
  { label: "Sections", key: "/sections", icon: <GridViewIcon /> },
];
