import type { ColumnsType } from "antd/es/table";

interface IDataType {
  key: string;
  name: string;
  category: string;
  price: string;
}

export const ColumnsMockedProducts: ColumnsType<IDataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (text) => <a>{text}</a>,
  },
];

export const DataMockedProducts: IDataType[] = [
  {
    key: "1",
    name: "Francesinha",
    price: "8,00",
    category: "Sanduish",
  },
  {
    key: "2",
    name: "Francesinha",
    price: "8,00",
    category: "Sanduish",
  },
  {
    key: "3",
    name: "Francesinha",
    price: "8,00",
    category: "Sanduish",
  },
  {
    key: "4",
    name: "Francesinha",
    price: "8,00",
    category: "Sanduish",
  },
  {
    key: "5",
    name: "Francesinha",
    price: "8,00",
    category: "Sanduish",
  },
  {
    key: "6",
    name: "Francesinha",
    price: "8,00",
    category: "Sanduish",
  },
  {
    key: "7",
    name: "Francesinha",
    price: "8,00",
    category: "Sanduish",
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
  getCheckboxProps: (record: IDataType) => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name,
  }),
};