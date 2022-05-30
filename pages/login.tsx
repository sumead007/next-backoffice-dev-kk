import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox, Avatar, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions";
import { getCookie } from "../utils/cookie";
import { kToken } from "../utils/contants";
import { Alert } from "antd";

type Props = {
  token?: string;
};

export default function Login({ token }: Props) {
  const dispatch = useDispatch();
  const loginReducer = useSelector((state: any) => state.loginReducer); //ชื่อตรง index reducer
  var path = process.env.NEXT_PUBLIC_APP_BASE_IMAGE_URL;

  const { Meta } = Card;
  const onFinish = (values: any) => {
    // console.log("Success:", values);
    dispatch(actions.login(values));
  };

  const onFinishFailed = (errorInfo: any) => {
    // console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    // console.log(getCookie(kToken));
    // console.log(token);

    dispatch(actions.relogin({ token }));
  }, []);

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
        style={{ width: 400 }}
        cover={<img alt="example" src="/static/images/login3.jpeg" />}
      >
        <Meta
          title="กรุณาเข้าสู่ระบบ"
          style={{ marginBottom: 16 }}
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
            rules={[{ required: true, message: "โปรดกรอกช่องนี้!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "โปรดกรอกช่องนี้!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Prefix"
            name="prefix"
            rules={[{ required: true, message: "โปรดกรอกช่องนี้!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 4, span: 0 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4, span: 0 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <style jsx global>
        {`
          body {
            min-height: 100vh;
            position: relative;
            margin: 0px;
            background-size: cover;
            background-image: url("/static/images/bg.jpg");
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}

// export async function getStaticProps({ params: {slug} }:any ) {
//   // ↓add
//   console.log(`Building slug: ${slug}`)
// }
