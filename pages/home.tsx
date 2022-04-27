import { Layout, Menu, MenuProps } from "antd";
import React from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import Slidebar from "../components/slidebar";
const { Header, Content, Footer, Sider } = Layout;

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

export default () => (
  <Layout hasSider>
    <Slidebar />
    <Layout
      className="site-layout"
      style={{
        marginLeft: 200,
      }}
    >
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
        }}
      />
      <Content
        style={{
          margin: "24px 16px 0",
          overflow: "initial",
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            textAlign: "center",
          }}
        >
          ...
          <br />
          Really
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          long
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          content
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
);
