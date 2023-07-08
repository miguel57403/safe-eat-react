import { useParams } from "react-router-dom";
import { Button, Form, Input, InputNumber, Select, Space } from "antd";
import { StyledContentP } from "./styled";
import { FontsDefault } from "assets/fonts/Fonts";
import { useEffect, useState } from "react";

export const ContentDeliveriesForm = () => {
  const params = useParams();
  const isUpdating = !!params.id;
  // TODO: Use the id to get the name
  const name = "Delivery one";
  return (
    <StyledContentP>
      <FontsDefault.H2 className="title-content" fontsSize={32} color="black">
        {isUpdating ? "Deliveries: " + name : "Deliveries: new"}
      </FontsDefault.H2>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "calc(100vh - 20px - 100px)",
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DeliveryForm
          isUpdating={isUpdating}
          onSubmit={(values) => {
            console.log(values);
          }}
        />
      </div>
    </StyledContentP>
  );
};

type DeliveryFormProps = {
  isUpdating: boolean;
  onSubmit: (values: DeliveryFormValues) => void;
};

function DeliveryForm({ isUpdating, onSubmit }: DeliveryFormProps) {
  const [restrictions, setRestrictions] = useState<Option[]>([]);

  useEffect(() => {
    async function loadRestrictions() {
      // TODO: fetch restrictions from the API
      const restrictionsFake: Option[] = Array.from({ length: 10 }, (_, i) => ({
        id: i.toString(),
        name: `Restriction ${i}`,
      }));

      setRestrictions(restrictionsFake);
    }

    loadRestrictions();
  }, []);

  const onFinish = (values: DeliveryFormValues) => {
    onSubmit(values);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      style={{
        maxWidth: 600,
        minWidth: 400,
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "8px",
      }}
      initialValues={{ remember: true }}
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
      requiredMark={true}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Name is required" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: "Price is required" }]}
      >
        <InputNumber prefix="€" style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Minimum Time"
        name="minimumTime"
        rules={[{ required: true, message: "Minimum time is required" }]}
      >
        <InputNumber addonAfter="min" style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Maximum Time"
        name="maximumTime"
        rules={[{ required: true, message: "Maximum time is required" }]}
      >
        <InputNumber addonAfter="min" style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {isUpdating ? "Update" : "Create"}
        </Button>
      </Form.Item>
    </Form>
  );
}

type Option = {
  id: string;
  name: string;
};

type DeliveryFormValues = {
  name: string;
  price: number;
  minimumTime: string;
  maximumTime: string;
};
