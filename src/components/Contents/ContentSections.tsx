import { DeleteOutlined, MoreOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Popover, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Search from "antd/es/transfer/search";
import { FontsDefault } from "assets/fonts/Fonts";
import { StyledContentP } from "components/Contents/styled";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const ContentSections = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<IDataType[]>([]);

  useEffect(() => {
    async function loadData() {
      setData([
        {
          key: "1",
          name: "Popular",
          productsCount: 10,
        },
        {
          key: "1",
          name: "House Suggestions",
          productsCount: 10,
        },
        {
          key: "1",
          name: "Drinks",
          productsCount: 10,
        },
      ]);
    }

    loadData();
  }, []);

  // TODO: Change table to grid of cards with 4 images of products
  return (
    <StyledContentP>
      <FontsDefault.H2 className="title-content" fontsSize={32} color="black">
        Sections
      </FontsDefault.H2>
      <div className="search-content">
        <Search placeholder="input search loading default" />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="large"
          onClick={() => navigate("/sections/new")}
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
          {data.length} sections
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
  productsCount: number;
}

const columns: ColumnsType<IDataType> = [
  {
    title: "Name",
    dataIndex: "name",
    className: "column-table",
    key: "name",
  },
  {
    title: "Products",
    dataIndex: "productsCount",
    className: "column-table",
    key: "productsCount",
    width: "200px",
  },
];
