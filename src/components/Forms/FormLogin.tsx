import { Button, Form, Input } from "antd";
import { useAppDispatch } from "app/store";
import { IGlobalAttribute } from "interfaces/IGlobalAttribute";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchThunkLogin,
  fetchThunkMe,
} from "services/thunks/auth/_thunkCreate";

export const FormLogin: React.FC<IGlobalAttribute> = ({ ...props }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onFinish = async ({ password, username }: FormLoginValues) => {
    try {
      await dispatch(fetchThunkLogin({ email: username, password }));
      await dispatch(fetchThunkMe(""))
      navigate("/restaurant/select");
    } catch (erro) {}
  };

  return (
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
  );
};

type FormLoginValues = {
  username: string;
  password: string;
};
