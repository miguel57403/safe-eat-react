import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const FormRestaurant = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = (values: FormRestaurantData) => {
    console.log("Success:", values);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 500);
  };

  return (
    <Form
      layout="vertical"
      className="form-login"
      initialValues={{ remember: false }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
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
                    <InputNumber prefix="€" placeholder="Price" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "minimumTime"]}
                    rules={[
                      { required: true, message: "Minimum time is required" },
                    ]}
                  >
                    <Input placeholder="Minimum time" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "maximumTime"]}
                    rules={[
                      { required: true, message: "Maximum time is required" },
                    ]}
                  >
                    <Input placeholder="Maximum time" />
                  </Form.Item>

                  <Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Form.Item>
                </Space>
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                block
                onClick={() => add()}
                icon={<PlusOutlined />}
              >
                Add delivery
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Space>
          <Button type="default" htmlType="submit" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Create
          </Button>
        </Space>
      </Form.Item>
    </Form>
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
