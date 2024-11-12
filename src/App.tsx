import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import "./index.css";
import Layout from "./layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Provider } from "react-redux";
import store from "./store";
import GoodsPage from "./pages/Goods";

const App = ({ initialData }: any) => {
  const testData = useLoaderData();
  console.log("testData====", testData);
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home initialData={initialData} />} />
          <Route
            path="/goods"
            element={<GoodsPage initialData={initialData} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Provider>
  );
};

export default App;

// import React from "react";
// import { Outlet } from "react-router-dom";
// import "./index.css";
// import Layout from "./layout";
// import { Route, Routes } from "react-router-dom";
// import GoodsPage, { loader as goodsLoader } from "./pages/Goods";
// import Home, { loader as homeLoader } from "./pages/Goods";
// import About from "./pages/About";

// const App = ({ initialData }: any) => (
//   <Layout>
//     <Routes>
//       <Route
//         path="/"
//         element={<Home initialData={initialData} />}
//         loader={homeLoader}
//       />
//       <Route
//         path="/goods"
//         element={<GoodsPage initialData={initialData} />}
//         loader={goodsLoader}
//       />
//       <Route path="/about" element={<About />} />
//     </Routes>
//   </Layout>
// );

// export default App;
