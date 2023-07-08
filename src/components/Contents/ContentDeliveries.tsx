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
import { useNavigate } from "react-router-dom";

const optionsMore = (
  <div style={{ gap: 10, display: "flex", flexDirection: "column" }}>
    <Button size="large">Section one</Button>
    <Button size="large">Section two</Button>
    <Button size="large">Adicionar</Button>
  </div>
);

export const ContentDeliveries = () => {
  const navigate = useNavigate();

  return (
    <StyledContentP>
      <FontsDefault.H2 className="title-content" fontsSize={32} color="black">
        Deliveries
      </FontsDefault.H2>
      <div className="search-content">
        <Search placeholder="input search loading default" />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          size="large"
          onClick={() => navigate("/deliveries/new")}
        >
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
          {DataMockedProducts.length} deliveries
        </FontsDefault.P1>
      </div>

      <Table
        className="table-content"
        columns={ColumnsMockedProducts}
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        dataSource={DataMockedProducts}
      />
    </StyledContentP>
  );
};
