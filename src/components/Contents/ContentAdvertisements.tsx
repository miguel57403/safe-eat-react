import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import Search from "antd/es/transfer/search";
import { useAppDispatch, useAppSelector } from "app/store";
import { FontsDefault } from "assets/fonts/Fonts";
import { StyledContentP } from "components/Contents/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchThunkAdvertisementByRestaurant } from "services/thunks/advertisement/_thunkGet";
import { styled } from "styled-components";

export const ContentAdvertisements = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<IDataType[]>([]);
  const advertisement =
    useAppSelector((state) => state.advertisements.advertisement) || [];
  const dispatch = useAppDispatch();
  const restaurants = useAppSelector(
    (state) => state.restaurants.mainRestaurant
  );

  useEffect(() => {
    if (restaurants) {
      dispatch(fetchThunkAdvertisementByRestaurant(restaurants.id));
    }
  }, [restaurants]);

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
        </div>

        <FontsDefault.P1 color="dark" fontsSize={15}>
          {advertisement.length} advertisements
        </FontsDefault.P1>
      </div>
      <GridContainer>
        {advertisement &&
          advertisement.map((item:any) => (
            <Card hoverable cover={<img alt="example" src={item.image} />}>
              <FontsDefault.H6
                fontsWeight={500}
                color="black"
                style={{ flexGrow: 1 }}
              >
                {item?.name}
              </FontsDefault.H6>
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
