import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Layout from "../components/layout";
import { Card, Row, Col } from "antd";
import LogoutIcon from "@mui/icons-material/Logout";
import EventIcon from "@mui/icons-material/Event";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions";
import axios from "axios";
import httpClient from "../utils/httpClient";

const gridStyle: React.CSSProperties = {
  width: 300,
  textAlign: "center",
  height: "50vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
};

const style: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  width: "100%",
  // minHeight:"100%",
  height: "100vh",
};
const { Meta } = Card;
export default function MiniDrawer({ token }) {
  const dispatch = useDispatch();
  const loginReducer = useSelector((state) => state.loginReducer); //ชื่อตรง index reducer

  React.useEffect(() => {
    // console.log(getCookie(kToken));

    dispatch(actions.relogin({ token }));
    load_data();
    // console.log(loginReducer.token);
  }, []);

  const load_data = async () => {
    const AuthStr = "Bearer ".concat(loginReducer.token);
    const res = httpClient.get(`/customer/reference/list`, {
      headers: { Authorization: "Bearer ".concat(token) },
    });
    console.log(res);

    // setproducts(res.data);
    // console.log(products);
  };

  return (
    <div style={style}>
      <Row gutter={16}>
        <Col span={6}>
          <Card.Grid style={{ ...gridStyle, color: "#00CC00" }}>
            <Box>
              <PeopleAltIcon style={{ fontSize: 180 }} />
              <br />
              <Box component={"h1"}>ข้อมูลเพื่อนที่แนะนำ</Box>
            </Box>
          </Card.Grid>
        </Col>
        <Col span={6}>
          <Card.Grid style={{ ...gridStyle, color: "#FF9933" }}>
            <Box>
              <EventIcon style={{ fontSize: 180 }} />
              <br />
              <Box component={"h1"}>กิจกรรม</Box>
            </Box>
          </Card.Grid>
        </Col>
        <Col span={6}>
          <Card.Grid style={{ ...gridStyle, color: "#A0A0A0" }}>
            <Box>
              <DevicesOtherIcon style={{ fontSize: 180 }} />
              <br />
              <Box component={"h1"}>อื่นๆ</Box>
            </Box>
          </Card.Grid>
        </Col>
        <Col span={6}>
          <Card.Grid
            style={{ ...gridStyle, color: "red" }}
            onClick={() => {
              dispatch(actions.logout());
              // console.log('test');
            }}
          >
            <Box>
              <LogoutIcon style={{ fontSize: 180 }} />
              <br />
              <Box component={"h1"}>ออกจากระบบ</Box>
            </Box>
          </Card.Grid>
        </Col>
      </Row>
    </div>
  );
}
