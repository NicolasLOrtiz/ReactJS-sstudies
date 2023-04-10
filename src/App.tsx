import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "antd/dist/reset.css";
import { Home, Raffle, Setup } from "./pages";
import { FormRegisterUser } from "./components";
import { ContainerPattern } from "./global/patterns";

const App: FC = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register-user" element={<FormRegisterUser />} />
          <Route path={"/setup"} element={<Setup />} />
          <Route path={"/sorteio"} element={<Raffle />} />
          <Route path={"/container"} element={<ContainerPattern />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};

export default App;
