import { Button, Form, Input } from "antd";
import { StyledFormLogin } from "components/Forms/styled";
import { IGlobalAttribute } from "interfaces/IGlobalAttribute";
import React from "react";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

export const FormLogin: React.FC<IGlobalAttribute> = ({ ...props }) => {
  return (
    <StyledFormLogin {...props}>
      <Form
        name="login-form"
        layout="vertical"
        className="form-login"
        initialValues={{ remember: false }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
