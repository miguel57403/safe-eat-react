import React from "react";
import { Button, Form, Input } from "antd";
import { StyledFormLogin } from "components/Forms/styled";
import { IGlobalAttribute } from "interfaces/IGlobalAttribute";
import { useNavigate } from "react-router-dom";

export const FormSignUp: React.FC<IGlobalAttribute> = ({ ...props }) => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log(values);
    navigate("/login");
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
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Cellphone"
          name="cellphone"
          rules={[{ required: true, message: "Cellphone is required" }]}
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
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </StyledFormLogin>
  );
};
