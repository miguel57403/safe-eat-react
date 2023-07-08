import { useParams } from "react-router-dom";
import { StyledContentP } from "./styled";
import { FontsDefault } from "assets/fonts/Fonts";
import { useEffect, useState } from "react";
import { Button, Form, Input, Select, Space } from "antd";

export const ContentSectionsForm = () => {
  const params = useParams();
  const isUpdating = !!params.id;
  // TODO: Use the id to get the name of the section
  const name = "Section one";

  return (
    <StyledContentP>
      <FontsDefault.H2 className="title-content" fontsSize={32} color="black">
        {isUpdating ? "Sections: " + name : "Sections: new"}
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
        <SectionsForm
          isUpdating={isUpdating}
          onSubmit={(values) => {
            console.log(values);
          }}
        />
      </div>
    </StyledContentP>
  );
};

type SectionsFormProps = {
  isUpdating: boolean;
  onSubmit: (values: SectionsFormValues) => void;
};

export const SectionsForm = ({ onSubmit, isUpdating }: SectionsFormProps) => {
  const [products, setProducts] = useState<Option[]>([]);

  const onFinish = (values: SectionsFormValues) => {
    onSubmit(values);
  };

  useEffect(() => {
    async function loadProducts() {
      // TODO: fetch from the API
      const productsFake: Option[] = Array.from({ length: 10 }, (_, i) => ({
        id: i.toString(),
        name: `Product ${i}`,
      }));

      setProducts(productsFake);
    }

    loadProducts();
  }, []);

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
        label="Products"
        name="productIds"
        rules={[{ required: true, message: "Products is required" }]}
      >
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="select the products"
          optionLabelProp="label"
        >
          {products.map((it) => (
            <Select.Option value={it.id} label={it.name}>
              <Space>{it.name}</Space>
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {isUpdating ? "Update" : "Create"}
        </Button>
      </Form.Item>
    </Form>
  );
};

type SectionsFormValues = {
  name: string;
  productIds: string[];
};

type Option = {
  id: string;
  name: string;
};
