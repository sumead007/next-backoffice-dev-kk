import React from "react";
import { Form, Input, Button, Checkbox, Avatar, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions";
import { getCookie } from "../utils/cookie";
import { kToken } from "../utils/contants";
import { Alert } from "antd";

type Props = {};

export default function login({}: Props) {
  const dispatch = useDispatch();
  const loginReducer = useSelector((state) => state.loginReducer); //ชื่อตรง index reducer

  const { Meta } = Card;
  const onFinish = (values: any) => {
    console.log("Success:", values);
    dispatch(actions.login(values));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  // React.useEffect(() => {
  //   console.log(getCookie(kToken));
  // }, []);

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // width: "..",
    height: "100vh",
  };

  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e, "I was closed.");
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
        {loginReducer.isFailed && (
          <Alert
            message="มีข้อผิดพลาด"
            description={loginReducer.message}
            type="error"
            closable
            style={{ marginBottom: 10 }}
            onClose={onClose}
          />
        )}

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
            label="Prefix"
            name="prefix"
            rules={[{ required: true, message: "Please input your prefix!" }]}
          >
            <Input />
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
