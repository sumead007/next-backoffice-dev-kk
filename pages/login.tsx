import React from "react";
import { Form, Input, Button, Checkbox, Avatar, Card } from "antd";
import { useDispatch } from "react-redux";
import actions from "../redux/actions";

type Props = {};

export default function login({}: Props) {
  const dispatch = useDispatch();

  const { Meta } = Card;
  const onFinish = (values: any) => {
    console.log("Success:", values);
    dispatch(actions.login(values))
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // width: "..",
    height: "100vh",
  };

  return (
    <div style={style}>
      <Card
        style={{ width: 380 }}
        cover={<img alt="example" src="static/images/login.jpeg" />}
      >
        <Meta
        //   title="เข้าสู่ระบบ"
        //   description="www.instagram.com"
        />
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
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

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
