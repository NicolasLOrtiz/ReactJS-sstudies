import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "antd/dist/reset.css";
import { Home } from "./pages";
import { FormRegisterUser } from "./components";

const App: FC = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register-user" element={<FormRegisterUser />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
