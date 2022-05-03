import { Table } from "antd";
import { NextPageContext } from "next";
import qs from "qs";
import React from "react";
import { useDispatch } from "react-redux";

const getRandomuserParams = (params) => ({
  results: params.pagination.pageSize,
  page: params.pagination.current,
  ...params,
});

class AntTable extends React.Component {
  state = {
    data: [],
    pagination: {
      current: 1,
      pageSize: 10,
    },
    loading: false,
  };

  componentDidMount() {
    const { pagination } = this.state;
    this.fetch({ pagination });
    // console.log(this.props);
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };

  fetch = (params = {}) => {
    const { link } = this.props;
    this.setState({ loading: true });

    console.log(
      "link query is: " + `${link}?${qs.stringify(getRandomuserParams(params))}`
    );
    console.log(params);

    fetch(`${link}?${qs.stringify(getRandomuserParams(params))}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          loading: false,
          data: data.results,
          pagination: {
            ...params.pagination,
            total: 200,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      });
  };


  render() {
    const { data, pagination, loading } = this.state;
    const { columns } = this.props;

    return (
      <>
        <Table
          columns={columns}
          rowKey={(record) => record.login.uuid}
          dataSource={data}
          pagination={pagination}
          loading={loading}
          onChange={this.handleTableChange}
        />
      </>
    );
  }
}

// // Called in server-side
// AntTable.getInitialProps = (ctx: NextPageContext) => {
//   let token;
//   const isServer = !!ctx.req;
//   // if (isServer && ctx.req.headers.cookie) {
//   //   token = getCookie("token", ctx.req);
//   // }
//   // console.log("CMCookie : token " + token);
//   // return { token };
//   console.log("test");

//   return {};
// };

export default AntTable;
