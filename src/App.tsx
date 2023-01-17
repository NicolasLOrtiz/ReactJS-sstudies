import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "antd/dist/reset.css";
import { Home } from "./pages";

const App: FC = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
