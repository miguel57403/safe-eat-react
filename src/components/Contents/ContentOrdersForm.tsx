import { FontsDefault } from "assets/fonts/Fonts";
import { StyledContentP } from "./styled";
import { useParams } from "react-router-dom";
import {
  Form,
  Input,
  Select,
  Space,
  Button,
  DatePicker,
  Divider,
  InputNumber,
  Statistic,
  Card,
  Rate,
  Descriptions,
} from "antd";

export const ContentOrdersForm = () => {
  const params = useParams();
  const statuses = [
    {
      title: "Registered",
      value: new Date(),
      color: "#d46b08",
    },
    {
      title: "Preparing",
      value: new Date(),
      color: "#d4b106",
    },
    {
      title: "Transporting",
      value: new Date(),
      color: "#0958d9",
    },
    {
      title: "Delivered",
      value: new Date(),
      color: "#389e0d",
    },
    {
      title: "Cancelled",
      value: new Date(),
      color: "#cf1322",
    },
  ];
  const name = "Order one";

  return (
    <StyledContentP>
      <FontsDefault.H2 className="title-content" fontsSize={32} color="black">
        Order: {params.id && name}
      </FontsDefault.H2>
      <GridContainer
        style={{
          flexGrow: 1,
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <StatusesStatuses
            onSubmit={(values) => {
              console.log(values);
            }}
          />

          {statuses
            .filter((it) => it.value)
            .map((it) => (
              <Card
                key={`statistic-${it.title}`}
                bodyStyle={{ padding: "10px" }}
              >
                <Statistic
                  title={it.title}
                  value={formatDate(it.value!)}
                  valueStyle={{ color: it.color }}
                />
              </Card>
            ))}
        </div>
        <Card bodyStyle={{ padding: "16px" }}>
          <div
            style={{
              padding: "16px",
              maxHeight: "calc(100vh - 20px - 100px - 40px)",
              overflowY: "auto",
            }}
          >
            <OrdersForm />
          </div>
        </Card>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Card bodyStyle={{ padding: "10px" }}>
            <Descriptions bordered size="small" column={1}>
              <Descriptions.Item label="Subtotal">€ 8,00</Descriptions.Item>
              <Descriptions.Item label="Delivery">€ 0,99</Descriptions.Item>
              <Descriptions.Item label="Total">€ 8,99</Descriptions.Item>
            </Descriptions>
          </Card>
          <Card bodyStyle={{ padding: "10px" }}>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              initialValues={{ remember: true }}
              layout="vertical"
              autoComplete="off"
              requiredMark={true}
            >
              <Form.Item label="Score" name="score">
                <Rate disabled defaultValue={2} />
              </Form.Item>
              <Form.Item label="Comment" name="comment">
                <TextArea disabled value="Hello world" />
              </Form.Item>
            </Form>
          </Card>
        </div>
      </GridContainer>
    </StyledContentP>
  );
};

type StatusesFormProps = {
  onSubmit: (values: OrdersFormValues) => void;
};

const StatusesStatuses = ({ onSubmit }: StatusesFormProps) => {
  const statuses: Option[] = [
    {
      key: "REGISTERED",
      name: "Registered",
    },
    {
      key: "PREPARING",
      name: "Preparing",
    },
    {
      key: "TRANSPORTING",
      name: "Transporting",
    },
    {
      key: "DELIVERED",
      name: "Delivered",
    },
    {
      key: "CANCELED",
      name: "Cancelled",
    },
  ];

  const onFinish = (values: OrdersFormValues) => {
    onSubmit(values);
  };

  return (
    <Card bodyStyle={{ padding: "10px" }}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        initialValues={{ remember: true }}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        requiredMark={true}
      >
        <Form.Item
          label="Status"
          name="status"
          rules={[{ required: true, message: "Status is required" }]}
        >
          <Select
            style={{ width: "100%" }}
            placeholder="select the products"
            optionLabelProp="label"
          >
            {statuses.map((it) => (
              <Select.Option value={it.key} label={it.name}>
                <Space>{it.name}</Space>
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export const OrdersForm = () => {
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      initialValues={{ remember: true }}
      layout="vertical"
      autoComplete="off"
      requiredMark={true}
    >
      <Form.Item
        label="Time"
        name="time"
        rules={[{ required: true, message: "Hour is required" }]}
      >
        <DatePicker disabled style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Subtotal"
        name="subtotal"
        rules={[{ required: true, message: "Subtotal is required" }]}
      >
        <InputNumber disabled prefix={"€"} />
      </Form.Item>

      <Form.Item
        label="Total"
        name="total"
        rules={[{ required: true, message: "Total is required" }]}
      >
        <InputNumber disabled prefix={"€"} />
      </Form.Item>

      <Form.Item
        label="Quantity"
        name="quantity"
        rules={[{ required: true, message: "Quantity is required" }]}
      >
        <InputNumber disabled style={{ width: "100%" }} />
      </Form.Item>

      <Divider plain>Client</Divider>

      <Form.Item
        label="Name"
        name="clientName"
        rules={[{ required: true, message: "Name required" }]}
      >
        <Input disabled />
      </Form.Item>

      <Form.Item
        label="Cellphone"
        name="cellphone"
        rules={[{ required: true, message: "Cellphone required" }]}
      >
        <Input disabled />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Email required" }]}
      >
        <Input disabled />
      </Form.Item>

      <Divider plain>Address</Divider>

      <Form.Item
        label="Street"
        name="street"
        rules={[{ required: true, message: "Street is required" }]}
      >
        <Input disabled />
      </Form.Item>

      <Form.Item
        label="Number"
        name="number"
        rules={[{ required: true, message: "Number is required" }]}
      >
        <InputNumber disabled />
      </Form.Item>

      <Form.Item
        label="Complement"
        name="complement"
        rules={[{ required: true, message: "Complement is required" }]}
      >
        <Input disabled />
      </Form.Item>

      <Form.Item
        label="City"
        name="city"
        rules={[{ required: true, message: "City is required" }]}
      >
        <Input disabled />
      </Form.Item>

      <Form.Item
        label="Postal Code"
        name="postalCode"
        rules={[{ required: true, message: "Postal Code is required" }]}
      >
        <Input disabled />
      </Form.Item>

      <Divider plain>Payment</Divider>

      <Form.Item
        label="Type"
        name="type"
        rules={[{ required: true, message: "Type is required" }]}
      >
        <Select disabled>
          <Select.Option value="CREDIT">Credit</Select.Option>
          <Select.Option value="DEBIT">Debit</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Expiration Date"
        name="type"
        rules={[{ required: true, message: "Expiration Date is required" }]}
      >
        <DatePicker disabled style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Number"
        name="number"
        rules={[{ required: true, message: "Number is required" }]}
      >
        <InputNumber disabled style={{ width: "100%" }} />
      </Form.Item>

      <Divider plain>Delivery</Divider>

      <Form.Item
        label="Name"
        name="deliveryName"
        rules={[{ required: true, message: "Name is required" }]}
      >
        <Input disabled />
      </Form.Item>

      <Form.Item
        label="Price"
        name="prive"
        rules={[{ required: true, message: "Price is required" }]}
      >
        <InputNumber disabled prefix={"€"} />
      </Form.Item>

      <Form.Item
        label="Minimum time"
        name="minimumTime"
        rules={[{ required: true, message: "Minimum time is required" }]}
      >
        <InputNumber disabled addonAfter={"min"} />
      </Form.Item>

      <Form.Item
        label="Maximum time"
        name="maximumTime"
        rules={[{ required: true, message: "Maximum time is required" }]}
      >
        <InputNumber disabled addonAfter={"min"} />
      </Form.Item>

      <Divider plain>Items</Divider>

      {Array.from({ length: 10 }).map((_, index) => (
        <Form.Item
          label={index === 0 ? "Deliveries" : ""}
          required={false}
          key={`item-${index}`}
        >
          <div style={{ display: "flex", gap: "16px" }}>
            <Form.Item
              name={[`item[${index}]`, "product"]}
              rules={[{ required: true, message: "Product is required" }]}
              style={{ flexGrow: 1 }}
            >
              <Input disabled placeholder="Product" style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              name={[`item[${index}]`, "quantity"]}
              rules={[{ required: true, message: "Quantity is required" }]}
            >
              <InputNumber disabled placeholder="Quantity" />
            </Form.Item>

            <Form.Item
              name={[`item[${index}]`, "price"]}
              rules={[{ required: true, message: "Price is required" }]}
            >
              <InputNumber disabled prefix="€" placeholder="Price" />
            </Form.Item>

            <Form.Item
              name={[`item[${index}]`, "subtotal"]}
              rules={[{ required: true, message: "Subtotal is required" }]}
            >
              <InputNumber disabled prefix="€" placeholder="Subtotal" />
            </Form.Item>
          </div>
        </Form.Item>
      ))}
    </Form>
  );
};

type OrdersFormValues = {
  name: string;
  productIds: string[];
};

type Option = {
  key: string;
  name: string;
};

import { styled } from "styled-components";
import TextArea from "antd/es/input/TextArea";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr 20%;
  gap: 10px;

  @media (max-width: 1500px) {
    grid-template-columns: 1fr;
  }
`;

function formatDate(date: Date) {
  return date.toISOString().slice(0, -5).replace("T", " ");
}
