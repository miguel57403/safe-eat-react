import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Search from "antd/es/transfer/search";
import { useAppDispatch, useAppSelector } from "app/store";
import { FontsDefault } from "assets/fonts/Fonts";
import { StyledContentP } from "components/Contents/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "services/api/models/Product";
import { fetchThunkProductsByRestaurant } from "services/thunks/product/_thunkGet";

export const ContentProducts = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<IDataType[]>([]);
  const productsConsult = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();
  const restaurantMain = useAppSelector(
    (state) => state.restaurants.mainRestaurant
  );

  useEffect(() => {
    if (restaurantMain) {
      dispatch(fetchThunkProductsByRestaurant(restaurantMain?.id));
    }
  }, [restaurantMain]);

  useEffect(() => {
    async function loadData() {
      setData([
        {
          key: "1",
          ingredientsCount: 1,
          name: "Pizza",
          price: "8,00",
        },
        {
          key: "1",
          ingredientsCount: 1,
          name: "Francezinha",
          price: "8,00",
        },
        {
          key: "1",
          ingredientsCount: 1,
          name: "Xis",
          price: "8,00",
        },
        {
          key: "1",
          ingredientsCount: 1,
          name: "Xis Salada",
          price: "8,00",
        },
        {
          key: "1",
          ingredientsCount: 1,
          name: "Xis Bacon",
          price: "8,00",
        },
      ]);
    }

    loadData();
  }, []);

  const formatHandlee = (product: Product) => {
    const name = product?.name?.toString();
    const price = `€ ${product?.price?.toFixed(2)}`;
    const ingredientsCount = Math.floor(Math.random() * 10);

    return {
      key: `key-${product.id.toString()}`,
      name: name?.toString(),
      price,
      ingredientsCount,
    };
  };

  return (
    <StyledContentP>
      <FontsDefault.H2 className="title-content" fontsSize={32} color="black">
        Products
      </FontsDefault.H2>
      <div className="search-content">
        <Search placeholder="input search loading default" />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="large"
          onClick={() => navigate("/products/new")}
        >
          New
        </Button>
      </div>

      <div className="info-content">
        <div className="actions">
          <Button icon={<DeleteOutlined />} size="large" />
        </div>

        <FontsDefault.P1 color="dark" fontsSize={15}>
          {data.length} produtos
        </FontsDefault.P1>
      </div>

      <Table
        className="table-content"
        columns={columns}
        rowSelection={{
          type: "checkbox",
          onChange: (
            selectedRowKeys: React.Key[],
            selectedRows: IDataType[]
          ) => {
            console.log(
              `selectedRowKeys: ${selectedRowKeys}`,
              "selectedRows: ",
              selectedRows
            );
          },
          getCheckboxProps: (record: IDataType) => ({}),
        }}
        dataSource={
          productsConsult &&
          productsConsult.map((product) => formatHandlee(product))
        }
      />
    </StyledContentP>
  );
};

interface IDataType {
  key: any;
  name: any;
  price: any;
  ingredientsCount: any;
}

const columns: ColumnsType<IDataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    className: "column-table",
  },
  {
    title: "Price",
    dataIndex: "price",
    className: "column-table",
    key: "price",
    width: "200px",
  },
  {
    title: "Ingredients",
    dataIndex: "ingredientsCount",
    className: "column-table",
    key: "ingredientsCount",
    width: "200px",
  },
];
