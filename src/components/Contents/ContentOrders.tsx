import { DeleteOutlined, MoreOutlined, PlusOutlined } from "@ant-design/icons";
import { Tag, Button, Popover, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Search from "antd/es/transfer/search";
import { FontsDefault } from "assets/fonts/Fonts";
import { StyledContentP } from "components/Contents/styled";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const ContentOrders = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<IDataType[]>([]);

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

      <Table className="table-content" columns={columns} dataSource={data} />
    </StyledContentP>
  );
};

interface IDataType {
  key: string;
  client: string;
  status: string;
  quantity: string;
  total: string;
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
