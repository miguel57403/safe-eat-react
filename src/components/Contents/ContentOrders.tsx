import { DeleteOutlined, MoreOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Popover, Table } from "antd";
import Search from "antd/es/transfer/search";
import {
  ColumnsMockedProducts,
  DataMockedProducts,
  rowSelection,
} from "assets/data/dataMocketTable";
import { FontsDefault } from "assets/fonts/Fonts";
import { StyledContentP } from "components/Contents/styled";
import { useState } from "react";

const optionsMore = (
  <div style={{ gap: 10, display: "flex", flexDirection: "column" }}>
    <Button size="large">Section one</Button>
    <Button size="large">Section two</Button>
    <Button size="large">Adicionar</Button>
  </div>
);

export const ContentOrders = () => {
  const [selectType, setSelectType] = useState<"checkbox" | "radio">(
    "checkbox"
  );
  return (
    <StyledContentP>
      <FontsDefault.H2 className="title-content" fontsSize={32} color="black">
        Orders
      </FontsDefault.H2>
      <div className="search-content">
        <Search placeholder="input search loading default" />
        <Button type="primary" icon={<PlusOutlined />} size="large">
          New
        </Button>
      </div>

      <div className="info-content">
        <div className="actions">
          <Button icon={<DeleteOutlined />} size="large" />
          <Popover
            content={optionsMore}
            title="Add to"
            placement="bottom"
            trigger="click"
          >
            <Button color="" icon={<MoreOutlined />} size="large" />
          </Popover>
        </div>

        <FontsDefault.P1 color="dark" fontsSize={15}>
          {DataMockedProducts.length} orders
        </FontsDefault.P1>
      </div>

      <Table
        className="table-content"
        columns={ColumnsMockedProducts}
        rowSelection={{
          type: selectType,
          ...rowSelection,
        }}
        dataSource={DataMockedProducts}
      />
    </StyledContentP>
  );
};
