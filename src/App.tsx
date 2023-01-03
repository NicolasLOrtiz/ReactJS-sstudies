import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { FormRegisterClient } from "./components";
import "antd/dist/reset.css";

const App: FC = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<FormRegisterClient />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
