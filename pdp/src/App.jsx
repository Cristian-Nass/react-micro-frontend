import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Header from "home/Header";
import Footer from "home/Footer";
import PDPContent from "./PDPContent";
import "./index.scss";

const RootLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='/product/:Id' element={<PDPContent />} />
    </Route>
  )
);

const App = () => (
  <div className='text-3xl mx-auto max-w-6xl'>
    <Header />
    <div className='my-10'>
      <RouterProvider router={router} />
    </div>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
