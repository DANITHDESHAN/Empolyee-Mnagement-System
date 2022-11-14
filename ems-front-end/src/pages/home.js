import { UsergroupAddOutlined, UserAddOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import UpdateEmployee from "../components/employee/common/UpdateEmployee";
const { Content, Footer, Sider } = Layout;

const Home = () => (
  <Layout>
    <Content>
      <Layout>
        <Sider
          className="site-layout-background"
          width={200}
          style={{
            backgroundColor: "white",
          }}
        >
          <Menu defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<UserAddOutlined />}>
              {/* <Link to="/dashboard">Dashboard</Link> */}
              Create Employee
            </Menu.Item>
            <Menu.Item key="2" icon={<UsergroupAddOutlined />}>
              {/* <Link to="/dashboard">Dashboard</Link> */}
              View Employee
            </Menu.Item>
          </Menu>
        </Sider>
        <Content
          style={{
            padding: "0 24px",
            minHeight: 280,
          }}
        >
          <UpdateEmployee />
        </Content>
      </Layout>
    </Content>
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);
export default Home;
