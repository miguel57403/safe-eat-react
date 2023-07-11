import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import Search from "antd/es/transfer/search";
import { useAppDispatch, useAppSelector } from "app/store";
import { FontsDefault } from "assets/fonts/Fonts";
import { StyledContentP } from "components/Contents/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Order } from "services/api/models/Order";
import { fetchThunkOrdersByRestaurants } from "services/thunks/orders/_thunkGet";

export const ContentOrders = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<IDataType[]>([]);
  const ordersByRestaurant = useAppSelector((state) => state.orders.orders);
  const restaurantMain = useAppSelector(
    (state) => state.restaurants.mainRestaurant
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (restaurantMain) {
      dispatch(fetchThunkOrdersByRestaurants(restaurantMain?.id));
    }
  }, []);

  useEffect(() => {
    async function loadData() {
      setData([
        {
          key: "1",
          client: "Daniel",
          status: "REGISTERED",
          total: "8,00",
          quantity: "1",
        },
        {
          key: "1",
          client: "Gustavo",
          status: "PREPARING",
          total: "8,00",
          quantity: "1",
        },
        {
          key: "1",
          client: "Miguel",
          status: "TRANSPORTING",
          total: "8,00",
          quantity: "1",
        },
        {
          key: "1",
          client: "Luiz",
          status: "DELIVERED",
          total: "8,00",
          quantity: "1",
        },
        {
          key: "1",
          client: "Alan",
          status: "CANCELED",
          total: "8,00",
          quantity: "1",
        },
      ]);
    }

    loadData();
  }, []);

  const formatHandlee = (order: Order) => {
    const name = order.client?.name?.toString();
    const status = order.status?.toString();
    const quantity = order.quantity?.toString();
    const total = `€ ${order.total?.toFixed(2)}`;

    return {
      key: `key-${order.id.toString()}`,
      client: name?.toString(),
      status,
      quantity,
      total,
    };
  };

  return (
    <StyledContentP>
      <FontsDefault.H2 className="title-content" fontsSize={32} color="black">
        Orders
      </FontsDefault.H2>
      <div className="search-content">
        <Search placeholder="input search loading default" />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="large"
          disabled={false}
          onClick={() => navigate("/orders/new")}
        >
          New
        </Button>
      </div>

      <div className="info-content">
        <div className="actions">
          <Button icon={<DeleteOutlined />} size="large" />
        </div>

        <FontsDefault.P1 color="dark" fontsSize={15}>
          {data.length} orders
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
        dataSource={ordersByRestaurant?.map((order) => formatHandlee(order))}
      />
    </StyledContentP>
  );
};

interface IDataType {
  key: any;
  client: any;
  status: any;
  quantity: any;
  total: any;
}

const statusMap: Record<string, string> = {
  REGISTERED: "volcano",
  PREPARING: "yellow",
  TRANSPORTING: "geekblue",
  DELIVERED: "green",
  CANCELED: "red",
};

const columns: ColumnsType<IDataType> = [
  {
    title: "Client",
    dataIndex: "client",
    key: "client",
    className: "column-table",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    className: "column-table",
    width: "200px",
    render: (_, { status }) => (
      <Tag color={statusMap[status]} key={status}>
        {status.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    className: "column-table",
    width: "200px",
    key: "quantity",
  },
  {
    title: "Total",
    dataIndex: "total",
    className: "column-table",
    width: "200px",
    key: "total",
  },
];
