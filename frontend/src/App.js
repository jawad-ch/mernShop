import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopBar from "./layouts/TopBar";
import SideBar from "./layouts/SideBar";
import Dashboard from "./pages/dashboard/Dashboard";
import Orders from "./pages/orders/Orders";
import styled from "styled-components";

const App = () => {
  const MainWrapper = styled.main`
    display: flex;
    height: 100%;
    width: 100vw;
    position: relative;
    overflow: hidden;
  `;
  return (
    <Router>
      <TopBar />
      <SideBar />
      <MainWrapper>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/orders" component={Orders} />
        </Switch>
      </MainWrapper>
    </Router>
  );
};

export default App;
