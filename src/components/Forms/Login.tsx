import { Button, Form, Input } from "antd";
import { StyledFormLogin } from "components/Forms/styled";
import { IGlobalAttribute } from "interfaces/IGlobalAttribute";
import { useNavigate } from "react-router-dom";
import React from "react";

export const FormLogin: React.FC<IGlobalAttribute> = ({ ...props }) => {
  const navigate = useNavigate();

  const onFinish = (values: FormLoginValues) => {
    console.log(values);
    navigate("/restaurant/select");
  };

  return (
    <StyledFormLogin {...props}>
      <Form
        name="login-form"
        layout="vertical"
        className="form-login"
        initialValues={{ remember: false }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </StyledFormLogin>
  );
};

type FormLoginValues = {
  username: string;
  password: string;
};
