import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, Avatar, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions";
import { getCookie } from "../utils/cookie";
import { kToken } from "../utils/contants";
import { Alert } from "antd";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

type Props = {
  token?: string;
};

const antIcon = <LoadingOutlined style={{ fontSize: 30 }} spin />;

export default function Login({ token }: Props) {
  const dispatch = useDispatch();
  const loginReducer = useSelector((state: any) => state.loginReducer); //ชื่อตรง index reducer
  var path = process.env.NEXT_PUBLIC_APP_BASE_IMAGE_URL;
  const router = useRouter();
  const { prefix } = router.query;
  const { Meta } = Card;
  const onFinish = (values: any) => {
    // console.log("Success:", values);
    dispatch(actions.login(values));
  };
  const [prefixed, setPrefix] = useState("");
  const onFinishFailed = (errorInfo: any) => {
    // console.log("Failed:", errorInfo);
  };

  // React.useEffect(() => {
  //   if (!router.isReady) return;
  //   const query = router.query;
  //   const { prefix: myPrefix } = query;
  //   console.log("myPrefix" + myPrefix);
  //   setPrefix(myPrefix);
  //   console.log("Prefix" + prefix);
  // }, [router.isReady, router.query]);

  useEffect(() => {
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
        {/* {prefix} */}
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
        {prefix ? (
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true, prefix: prefix }}
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
              <Input disabled />
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
        ) : (
          <Alert
            message="เกิดข้อผิดพลาด"
            description="กรุณาระบุ Prefix"
            type="error"
            closable
            onClose={onClose}
          />
        )}
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

// MyPage.getInitialProps = async (context: NextPageContext) => {
//   return {};
// };
