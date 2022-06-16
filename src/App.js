import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Homepage,
  Cryptocurrencies,
  Exchanges,
  Navbar,
  CryptoDetails,
  News,
} from "./components/index";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <Layout hasSider>
      <div className="App">
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <Navbar />
        </Sider>
        <div className="main">
          <Layout
            className="site-layout"
            style={{
              marginLeft: 200,
            }}
          >
            <Content
              style={{
                margin: "24px 16px 0",
                overflow: "initial",
              }}
            >
              {" "}
              <div className="routes">
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route
                    path="/cryptocurrencies"
                    element={<Cryptocurrencies />}
                  />
                  <Route path="/exchanges" element={<Exchanges />} />
                  <Route path="/news" element={<News />} />
                  <Route path="crypto/:coinId" element={<CryptoDetails />} />
                </Routes>
              </div>
            </Content>
          </Layout>
          <div className="footer">
            <Typography.Title level={5} style={{ color: "white" }}>
              CryptoApp <br />
              All rights reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
