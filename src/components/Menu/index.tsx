import {
  AntDesignOutlined,
  LogoutOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { Avatar, Menu, MenuProps, Dropdown } from "antd";
import { itemMocked } from "assets/data/dataMenuMocket";
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
        items={itemMocked}
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
