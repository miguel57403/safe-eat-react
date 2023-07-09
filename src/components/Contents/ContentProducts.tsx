import { DeleteOutlined, MoreOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Popover, Table } from "antd";
import Search from "antd/es/transfer/search";
import type { ColumnsType } from "antd/es/table";
import { FontsDefault } from "assets/fonts/Fonts";
import { StyledContentP } from "components/Contents/styled";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const ContentProducts = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<IDataType[]>([]);

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
          <Popover
            content={
              <div
                style={{ gap: 10, display: "flex", flexDirection: "column" }}
              >
                <Button size="large">Section one</Button>
                <Button size="large">Section two</Button>
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
        dataSource={data}
      />
    </StyledContentP>
  );
};

interface IDataType {
  key: string;
  name: string;
  price: string;
  ingredientsCount: number;
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
