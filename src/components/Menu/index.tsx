import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar, Menu } from "antd";
import { itemMocked } from "assets/data/dataMenuMocket";
import { FontsDefault } from "assets/fonts/Fonts";
import { StyleMenu } from "components/Menu/style";
import { IGlobalAttribute } from "interfaces/IGlobalAttribute";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const MenuSafeEat: React.FC<IGlobalAttribute> = ({ ...props }) => {
  const navigate = useNavigate();
  const [key, setKey] = useState("");

  const handleNavigate = (onClick: any) => {
    navigate(`/${onClick.key}`);
    setKey(onClick.key);
  };

  return (
    <StyleMenu {...props}>
      <FontsDefault.H2 fontsSize={25} className="logo-menu" color="white">
        <p>SafeEat </p>
        <p>Restaurants</p>
      </FontsDefault.H2>
      <Menu
        onClick={handleNavigate}
        className="section-menu"
        defaultOpenKeys={[key]}
        mode="vertical"
        items={itemMocked}
      />
      <div className="footer-menu">
        <Avatar size={40} icon={<AntDesignOutlined />} />
        <FontsDefault.P1 color="white" fontsSize={19}>
          Galinha da vizinha
        </FontsDefault.P1>
      </div>
    </StyleMenu>
  );
};
