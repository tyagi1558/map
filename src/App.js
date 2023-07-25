import React from "react";
import { Layout } from "antd";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import MapC from "./components/Map";
import Map1 from "./components/Map1";
import RegionInfo from "./components/RegionInfo";

// import "antd/dist/antd.css";
// import "./App.css";

const { Content, Footer } = Layout;

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Header />
        <Layout>
          <Content>
            <div className="row">
              <div className="col text-center">
                <MapC />
              </div>
            </div>
            <RegionInfo />
          </Content>
        </Layout>
        <Footer className="text-center">
          Map UI App ©2023 Created by Anmol
        </Footer>
      </Layout>
    </Provider>
  );
}

export default App;
