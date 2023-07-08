import { Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

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

export const ColumnsMockedProducts: ColumnsType<IDataType> = [
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
    key: "quantity",
  },
  {
    title: "Total",
    dataIndex: "total",
    className: "column-table",
    key: "total",
  },
];

export const DataMockedProducts: IDataType[] = [
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
];

export const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: IDataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record: IDataType) => ({}),
};
