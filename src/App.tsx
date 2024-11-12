import React from "react";
import { BrowserRouter, StaticRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import GoodsPage from "./pages/Goods";
import About from "./pages/About";
import Layout from "./layout";
import GoodDetail from "./pages/GoodDetail";

interface AppProps {
  staticContext?: any;
  location?: string;
  initialData?: any;
}

const App: React.FC<AppProps> = ({ staticContext, location, initialData }) => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/goods" component={GoodsPage} />
        <Route path="/goodDetail/:id" component={GoodDetail} />
        <Route path="/about" component={About} />
      </Switch>
    </Layout>
  );
};

export default App;
