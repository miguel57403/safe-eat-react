import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar, Button, Divider, Empty } from "antd";
import { FontsDefault } from "assets/fonts/Fonts";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export const ContentRestaurantSelect = () => {
  const navigate = useNavigate();
  const data = Array.from({ length: 4 });
  // const data = [] as any[];

  return (
    <Container>
      <FontsDefault.H2 fontsSize={32} color="white">
        Select a Restaurant
      </FontsDefault.H2>
      <div className="items">
        {data.length === 0 ? (
          <div className="empty">
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          </div>
        ) : (
          data.map((item, i) => (
            <div
              key={"items" + i}
              className="item"
              onClick={() => {
                navigate("/dashboard");
                console.log(item);
              }}
            >
              <Avatar size={40} icon={<AntDesignOutlined />} />
              <FontsDefault.P1 color="black" fontsSize={16}>
                Galinha da vizinha
              </FontsDefault.P1>
            </div>
          ))
        )}
      </div>
      <Button>+ Create a Restaurant</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 400px;
  padding: 12px;
  align-items: center;

  & .items {
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: white;
    padding: 12px;
    border-radius: 8px;
    width: 100%;
  }

  & .item {
    height: 80px;
    background-color: #efdbff;
    border-radius: 8px;
    gap: 10px;
    display: flex;
    align-items: center;
    padding: 10px;
  }

  & .item:hover {
    background-color: #d3adf7;
    cursor: pointer;
  }

  & .empty {
    display: flex;
    align-content: center;
    justify-content: center;
    position: relative;
    border-radius: 8px;
  }
`;
