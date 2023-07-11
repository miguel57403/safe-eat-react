import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Empty, Typography } from "antd";
import { setRestaurantMain } from "app/redux/restaurants";
import { useAppDispatch, useAppSelector } from "app/store";
import { FontsDefault } from "assets/fonts/Fonts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchThunkRestaurantsByUser } from "services/thunks/restaurants/_thunkGet";
import { styled } from "styled-components";

export const ContentRestaurantSelect = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState<RestaurantSelection[]>([]);
  const userAuth = useAppSelector((state) => state.auth.userAuth);
  const restaurantsByUser =
    useAppSelector((state) => state.restaurants.restaurants) || [];
  const restaurantsMain =
    useAppSelector((state) => state.restaurants.mainRestaurant) || [];
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(restaurantsMain);
  }, [restaurantsMain]);

  useEffect(() => {
    if (userAuth) dispatch(fetchThunkRestaurantsByUser(userAuth.id));
  }, [userAuth]);

  useEffect(() => {
    async function loadRestaurants() {
      try {
        const length = 8;
        const restaurantsMock: RestaurantSelection[] = Array.from({
          length,
        }).map((_, i) => ({
          id: `${i}`,
          name: `Restaurant ${i}`,
          logo: `https://picsum.photos/300/200?random=${i}`,
          cover: `https://picsum.photos/300/200?random=${i + length + 1}`,
        }));

        setRestaurants(restaurantsMock);
      } catch (error) {
        // TODO: handle error
        console.error(error);
      }
    }

    loadRestaurants();
  }, []);

  return (
    <Container>
      <FontsDefault.H2 fontsSize={32} color="white">
        Select a Restaurant
      </FontsDefault.H2>
      <div className="items">
        {restaurantsByUser && restaurantsByUser?.length === 0 ? (
          <div className="empty">
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          </div>
        ) : (
          restaurantsByUser &&
          restaurantsByUser.map((item) => (
            <Card
              key={`restaurant-${item.id}`}
              hoverable
              title={
                <div style={{ paddingBlock: "12px" }}>
                  <Avatar
                    shape="square"
                    size={80}
                    icon={
                      !item.logo ? (
                        <AntDesignOutlined />
                      ) : (
                        <img src={item.logo} alt="img" />
                      )
                    }
                  />
                </div>
              }
              headStyle={{ background: `url(${item.cover}) no-repeat` }}
              style={{ width: 300 }}
              onClick={() => {
                dispatch(setRestaurantMain(item));
                navigate("/dashboard");
              }}
              children={
                <Typography.Title level={4}>{item.name}</Typography.Title>
              }
            />
          ))
        )}
      </div>
      <Button size="large" onClick={() => navigate("/restaurant/new")}>
        + Create a Restaurant
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
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
    max-height: 60vh;
    overflow-y: auto;
  }

  & .empty {
    display: flex;
    align-content: center;
    justify-content: center;
    position: relative;
    border-radius: 8px;
  }
`;

type RestaurantSelection = {
  id: string;
  name: string;
  logo?: string;
  cover: string;
};
