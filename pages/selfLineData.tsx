import React from "react";
import Layout from "../components/layout";
import AntTable from "../components/antTable";
import { Form, DatePicker, TimePicker, Button } from "antd";
import { Box } from "@mui/material";

const { RangePicker } = DatePicker;
type Props = {};
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const rangeConfig = {
  rules: [
    { type: "array" as const, required: true, message: "โปรดกรอกช่องนี้" },
  ],
};

export default function SelfLineData({}: Props) {
  const onFinish = (fieldsValue: any) => {
    // Should format date value before submit.
    const rangeTimeValue = fieldsValue["range-time-picker"];
    const values = {
      ...fieldsValue,
      "range-time-picker": [
        rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
        rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss"),
      ],
    };
    console.log("Received values of form: ", JSON.stringify(values));
  };
  return (
    <div>
      <Layout>
        <Box component="h1">ดูข้อมูลสายตัวเอง</Box>

        <Form
          size="large"
          name="time_related_controls"
          {...formItemLayout}
          onFinish={onFinish}
        >
          <Form.Item
            name="range-time-picker"
            label="ค้นหาตามช่วงเวลา"
            {...rangeConfig}
          >
            <RangePicker showTime format="DD-MM-YYYY HH:mm:ss" />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              xs: { span: 24, offset: 0 },
              sm: { span: 16, offset: 8 },
            }}
          >
            <Button type="primary" htmlType="submit">
              ค้นหา
            </Button>
          </Form.Item>
        </Form>
        <AntTable
          columns={[
            {
              title: "Name",
              dataIndex: "name",
              sorter: true,
              render: (name) => `${name.first} ${name.last}`,
              width: "20%",
            },
            {
              title: "Gender",
              dataIndex: "gender",
              filters: [
                { text: "Male", value: "male" },
                { text: "Female", value: "female" },
              ],
              width: "20%",
            },
            {
              title: "Email",
              sorter: true,
              dataIndex: "email",
            },
          ]}
          link={"https://randomuser.me/api"}
        />
      </Layout>
    </div>
  );
}
