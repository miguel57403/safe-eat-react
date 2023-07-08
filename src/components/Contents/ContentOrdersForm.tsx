import { FontsDefault } from "assets/fonts/Fonts";
import { StyledContentP } from "./styled";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  Form,
  Input,
  Select,
  Space,
  Button,
  DatePicker,
  Divider,
  InputNumber,
} from "antd";

export const ContentOrdersForm = () => {
  const params = useParams();
  const name = "Order one";

  return (
    <StyledContentP>
      <FontsDefault.H2 className="title-content" fontsSize={32} color="black">
        Order: {params.id && name}
      </FontsDefault.H2>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "calc(100vh - 20px - 100px)",
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
          }}
        >
          <div
            style={{
              padding: "16px",
              maxHeight: "75vh",
              overflowY: "auto",
              minWidth: "800px",
            }}
          >
            <OrdersForm
              isUpdating={true}
              onSubmit={(values) => {
                console.log(values);
              }}
            />
          </div>
        </div>
      </div>
    </StyledContentP>
  );
};

type OrdersFormProps = {
  isUpdating: boolean;
  onSubmit: (values: OrdersFormValues) => void;
};

export const OrdersForm = ({ onSubmit, isUpdating }: OrdersFormProps) => {
  const [statuses, setStatuses] = useState<Option[]>([
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
  ]);

  const onFinish = (values: OrdersFormValues) => {
    onSubmit(values);
  };

  return (
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

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {isUpdating ? "Update" : "Create"}
        </Button>
      </Form.Item>
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
