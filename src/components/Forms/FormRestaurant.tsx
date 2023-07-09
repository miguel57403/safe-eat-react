import {
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Space, Upload } from "antd";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

type FormRestaurantProps = {
  isUpdating?: boolean;
  isLoading?: boolean;
  onSubmit: (values: FormRestaurantData) => void;
};

export const FormRestaurant = ({
  onSubmit,
  isLoading = false,
  isUpdating = false,
}: FormRestaurantProps) => {
  const navigate = useNavigate();

  return (
    <FormContainer>
      <Form
        layout="vertical"
        className="form-login"
        initialValues={{ remember: false }}
        onFinish={onSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Logo"
          name="logo"
          rules={[{ required: true, message: "Logo is required" }]}
        >
          <Upload listType="picture" maxCount={1}>
            <Button style={{ width: "100%" }} icon={<UploadOutlined />}>
              Upload
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Cover"
          name="cover"
          rules={[{ required: true, message: "Cover is required" }]}
        >
          <Upload listType="picture" maxCount={1}>
            <Button style={{ width: "100%" }} icon={<UploadOutlined />}>
              Upload
            </Button>
          </Upload>
        </Form.Item>

        <Form.List name="deliveries">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }, index) => (
                <Form.Item
                  label={index === 0 ? "Deliveries" : ""}
                  required={false}
                  key={key}
                >
                  <Space>
                    <Form.Item
                      {...restField}
                      name={[name, "name"]}
                      rules={[{ required: true, message: "Name is required" }]}
                    >
                      <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "price"]}
                      rules={[{ required: true, message: "Price is required" }]}
                    >
                      <InputNumber
                        prefix="€"
                        placeholder="Price"
                        style={{ width: "100%" }}
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "minimumTime"]}
                      rules={[
                        { required: true, message: "Minimum time is required" },
                      ]}
                    >
                      <InputNumber
                        placeholder="Minimum time"
                        addonAfter="min"
                        style={{ width: "100%" }}
                      />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "maximumTime"]}
                      rules={[
                        { required: true, message: "Maximum time is required" },
                      ]}
                    >
                      <InputNumber
                        placeholder="Maximum time"
                        addonAfter="min"
                        style={{ width: "100%" }}
                      />
                    </Form.Item>

                    <Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Form.Item>
                  </Space>
                </Form.Item>
              ))}
              <Form.Item>
                <Button block onClick={() => add()} icon={<PlusOutlined />}>
                  Add delivery
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Space>
            <Button
              type="default"
              htmlType="submit"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Create
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </FormContainer>
  );
};

type FormRestaurantData = {
  name: string;
  deliveries: {
    name: string;
    price: number;
    minimumTime: string;
    maximumTime: string;
  }[];
};

export const FormContainer = styled.div`
  width: 100%;
  max-height: 75vh;
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 800px;
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 4px 1px white;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
