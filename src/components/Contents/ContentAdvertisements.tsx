import { DeleteOutlined, MoreOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Popover } from "antd";
import Search from "antd/es/transfer/search";
import { FontsDefault } from "assets/fonts/Fonts";
import { StyledContentP } from "components/Contents/styled";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const ContentAdvertisements = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<IDataType[]>([]);

  useEffect(() => {
    async function loadData() {
      setData([
        {
          key: "1",
          name: "Pizza",
          image: `https://picsum.photos/300/200?random=250`,
        },
        {
          key: "1",
          name: "Francezinha",
          image: `https://picsum.photos/300/200?random=400`,
        },
        {
          key: "1",
          name: "Xis",
          image: `https://picsum.photos/300/200?random=450`,
        },
        {
          key: "1",
          name: "Xis Salada",
          image: `https://picsum.photos/300/200?random=500`,
        },
        {
          key: "1",
          name: "Xis Bacon",
          image: `https://picsum.photos/300/200?random=550`,
        },
      ]);
    }

    loadData();
  }, []);

  return (
    <StyledContentP>
      <FontsDefault.H2 className="title-content" fontsSize={32} color="black">
        Advertisements
      </FontsDefault.H2>
      <div className="search-content">
        <Search placeholder="input search loading default" />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="large"
          onClick={() => navigate("/advertisements/new")}
        >
          New
        </Button>
      </div>

      <div className="info-content">
        <div className="actions">
          <Button icon={<DeleteOutlined />} size="large" />
          <Popover
            content={
              <div
                style={{ gap: 10, display: "flex", flexDirection: "column" }}
              >
                <Button size="large">Section one</Button>
                <Button size="large">Section two</Button>dasdasdsad
                <Button size="large">Adicionar</Button>
              </div>
            }
            title="Add to"
            placement="bottom"
            trigger="click"
          >
            <Button color="" icon={<MoreOutlined />} size="large" />
          </Popover>
        </div>

        <FontsDefault.P1 color="dark" fontsSize={15}>
          {data.length} advertisements
        </FontsDefault.P1>
      </div>
      <GridContainer>
        {data.map((item) => (
          <Card hoverable cover={<img alt="example" src={item.image} />}>
            {item.name}
          </Card>
        ))}
      </GridContainer>
    </StyledContentP>
  );
};

interface IDataType {
  key: string;
  name: string;
  image: string;
}

import { styled } from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 10px;

  @media (max-width: 1800px) {
    grid-template-columns: repeat(3, auto);
  }

  @media (max-width: 1600px) {
    grid-template-columns: repeat(2, auto);
  }

  @media (max-width: 1400px) {
    grid-template-columns: repeat(1, auto);
  }
`;
