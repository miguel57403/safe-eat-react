import { DeleteOutlined, MoreOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Popover, Table } from "antd";
import Search from "antd/es/transfer/search";
import type { ColumnsType } from "antd/es/table";
import { FontsDefault } from "assets/fonts/Fonts";
import { StyledContentP } from "components/Contents/styled";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const ContentIngredients = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<IDataType[]>([]);

  useEffect(() => {
    async function loadData() {
      setData([
        {
          key: "1",
          restrictionsCount: 1,
          name: "Pizza",
        },
        {
          key: "1",
          restrictionsCount: 1,
          name: "Francezinha",
        },
        {
          key: "1",
          restrictionsCount: 1,
          name: "Xis",
        },
        {
          key: "1",
          restrictionsCount: 1,
          name: "Xis Salada",
        },
        {
          key: "1",
          restrictionsCount: 1,
          name: "Xis Bacon",
        },
      ]);
    }

    loadData();
  }, []);

  return (
    <StyledContentP>
      <FontsDefault.H2 className="title-content" fontsSize={32} color="black">
        Ingredients
      </FontsDefault.H2>
      <div className="search-content">
        <Search placeholder="input search loading default" />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="large"
          onClick={() => navigate("/ingredients/new")}
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
          {data.length} ingredients
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
  restrictionsCount: number;
}

const columns: ColumnsType<IDataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    className: "column-table",
  },
  {
    title: "Restrictions",
    dataIndex: "restrictionsCount",
    className: "column-table",
    key: "restrictionsCount",
    width: "200px",
  },
];
