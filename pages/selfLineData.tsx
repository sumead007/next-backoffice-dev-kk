import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import AntTable from "../components/antTable";
import { Form, DatePicker, TimePicker, Button } from "antd";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import actions from "../redux/actions";
import { getCookie } from "../utils/cookie";
import axios from "axios";
import { Table } from "antd";
import type { FilterValue, SorterResult } from "antd/lib/table/interface";
import type { ColumnsType, TablePaginationConfig } from "antd/lib/table";
import qs from "qs";
import httpClient from "../utils/httpClient";
import { kToken } from "../utils/contants";
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

//table

interface DataType {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  email: string;
  login: {
    uuid: string;
  };
}

interface Params {
  pagination?: TablePaginationConfig;
  sorter?: SorterResult<any> | SorterResult<any>[];
  total?: number;
  sortField?: string;
  sort?: string;
  sortOrder?: string;
}
const columns: ColumnsType<DataType> = [
  {
    title: "First_Name",
    dataIndex: "First_Name",
    // sorter: true,
    // render: (name) => `${name.first} ${name.last}`,
    width: "20%",
  },
  {
    title: "Last_Name",
    dataIndex: "Last_Name",
    // sorter: true,
    width: "20%",
  },
  {
    title: "Status",
    dataIndex: "Status",
    // sorter: true,
    width: "20%",
  },
  {
    title: "Telephone",
    dataIndex: "Telephone",
    // sorter: true,
    width: "20%",
  },
  {
    title: "Total",
    dataIndex: "Total",
    // sorter: true,
    width: "20%",
  },

  {
    title: "Turnover",
    dataIndex: "Turnover",
    // sorter: true,
    width: "20%",
  },
  {
    title: "Valid_Amount",
    dataIndex: "Valid_Amount",
    // sorter: true,
    width: "20%",
  },
  {
    title: "Winlost",
    dataIndex: "Winlost",
    // sorter: true,
    width: "20%",
  },
  // {
  //   title: "Gender",
  //   dataIndex: "gender",
  //   filters: [
  //     { text: "Male", value: "male" },
  //     { text: "Female", value: "female" },
  //   ],
  //   width: "20%",
  // },
  // {
  //   title: "Email",
  //   dataIndex: "email",
  // },
];
const getRandomuserParams = (params: Params) => ({
  limit: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

export default function SelfLineData({}: Props) {
  var token = "";
  const dispatch = useDispatch();
  React.useEffect(() => {
    // load_data();
    // dispatch(actions.selfLineData({}));
    fetchData({ pagination });
    token = getCookie(kToken);

    // load_data();
    // console.log(getCookie("token"));
  }, []);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
  });

  const handleTableChange = (
    newPagination: TablePaginationConfig,
    filters: Record<string, FilterValue>,
    sorter: SorterResult<DataType>
  ) => {
    fetchData({
      // sort: (sorter.field as string).concat(sorter.order as string),
      sortField: sorter.field as string,
      sortOrder: sorter.order as string,
      pagination: newPagination,
      ...filters,
    });
  };

  const fetchData = (params: Params = {}) => {
    setLoading(true);
    setTimeout(function () {
      httpClient
        .get(
          `/customer/reference/list?${qs.stringify(
            getRandomuserParams(params)
          )}`,
          {
            headers: { Authorization: "Bearer ".concat(token) },
          }
        )
        .then(({ data }) => {
          // console.log(data.data);
          const { data: newdata } = data.data;
          console.log(newdata);

          setData(newdata);
          setLoading(false);
          setPagination({
            ...params.pagination,
            // total: 200,
            // 200 is mock data, you should read it from server
            total: data.data.total_rows, //จำนวนทั้งหมด
          });
        })
        .catch(() => {});
    }, 2000);

    // fetch(
    //   `https://randomuser.me/api?${qs.stringify(getRandomuserParams(params))}`
    // )
    //   .then((res) => res.json())
    //   .then(({ results }) => {
    //     console.log(results);

    //     setData(results);
    //     setLoading(false);
    //     setPagination({
    //       ...params.pagination,
    //       total: 200,
    //       // 200 is mock data, you should read it from server
    //       // total: data.totalCount,
    //     });
    //   });
  };

  const load_data = async () => {
    const AuthStr = "Bearer ".concat(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NTM2NzMwMjIsInByZWZpeCI6ImJmMjEyIiwicmVmcmVzaF90b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpsZUhBaU9qRTJOVE0zTlRVNE1qSXNJbkJ5WldacGVDSTZJbUptTWpFeUlpd2lkWE5sY201aGJXVWlPaUl3T1RVeE9UQTBNRFkwSW4wLjl2Y09TT0FDbXJsVDBPVGVEWmYyem1xUUgzVUpuQ0RKUGRfd080MEFWWHciLCJ1c2VybmFtZSI6IjA5NTE5MDQwNjQifQ.67KVN9DSvz0B_I06bgVhWvLY2hTdaT5XaeQ9LkOijG8"
    );
    const res = await axios.get(
      "https://my-service.xyz:8443/api/v1/customer/reference/list?limit=10&page=1",
      { headers: { Authorization: AuthStr } }
    );
    console.log(res);

    // setproducts(res.data);
    // console.log(products);
  };

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
        <Table
          columns={columns}
          rowKey={(record) => Math.random()}
          // rowKey={(record) => record.login.uuid}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={handleTableChange}
        />
      </Layout>
    </div>
  );
}
