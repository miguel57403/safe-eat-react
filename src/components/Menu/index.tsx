import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar, Menu } from "antd";
import { itemMocked } from "assets/data/dataMenuMocket";
import { FontsDefault } from "assets/fonts/Fonts";
import { StyleMenu } from "components/Menu/style";
import { IGlobalAttribute } from "interfaces/IGlobalAttribute";
import { useNavigate, useLocation } from "react-router-dom";

export const MenuSafeEat: React.FC<IGlobalAttribute> = ({ ...props }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <StyleMenu {...props}>
      <FontsDefault.H2 fontsSize={25} className="logo-menu" color="white">
        <p>SafeEat </p>
        <p>Restaurants</p>
      </FontsDefault.H2>
      <Menu
        onClick={(e) => navigate(`${e.key}`)}
        className="section-menu"
        selectedKeys={[location.pathname]}
        mode="vertical"
        items={itemMocked}
      />
      <div className="footer-menu">
        <Avatar size={40} icon={<AntDesignOutlined />} />
        <FontsDefault.P1 color="white" fontsSize={16}>
          Galinha da vizinha
        </FontsDefault.P1>
      </div>
    </StyleMenu>
  );
};
