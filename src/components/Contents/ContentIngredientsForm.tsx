import { useState, useEffect } from "react";
import { Button, Form, Input, Select, Space } from "antd";
import { FontsDefault } from "assets/fonts/Fonts";
import { StyledContentP } from "./styled";
import { useParams } from "react-router-dom";

export function ContentIngredientsForm() {
  const params = useParams();
  const isUpdating = !!params.id;

  return (
    <StyledContentP>
      <FontsDefault.H2 className="title-content" fontsSize={32} color="black">
        {isUpdating ? "Ingredients" : "Ingredients: new"}
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
        <IngredientsForm
          isUpdating={isUpdating}
          onSubmit={(values) => {
            console.log(values);
          }}
        />
      </div>
    </StyledContentP>
  );
}

type IngredientsFormProps = {
  isUpdating: boolean;
  onSubmit: (values: IngredientsFormValues) => void;
};

function IngredientsForm({ isUpdating, onSubmit }: IngredientsFormProps) {
  const [restrictions, setRestrictions] = useState<RestrictionOption[]>([]);

  useEffect(() => {
    async function loadRestrictions() {
      // TODO: fetch restrictions from the API
      const restrictionsFake: RestrictionOption[] = Array.from(
        { length: 10 },
        (_, i) => ({
          id: i.toString(),
          name: `Restriction ${i}`,
        })
      );

      setRestrictions(restrictionsFake);
    }

    loadRestrictions();
  }, []);

  const onFinish = (values: IngredientsFormValues) => {
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
        label="Description"
        name="description"
        rules={[{ required: true, message: "Description is required" }]}
      >
        <Input.TextArea rows={3} />
      </Form.Item>

      <Form.Item
        label="Restrictions"
        name="restrictionIds"
        rules={[{ required: true, message: "Restrictions is required" }]}
      >
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="select the restrictions"
          optionLabelProp="label"
        >
          {restrictions.map((it) => (
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
}

type RestrictionOption = {
  id: string;
  name: string;
};

type IngredientsFormValues = {
  name: string;
  description: string;
  restrictionIds: string[];
};
