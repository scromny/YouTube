import React from "react";
import { Routes, Route,} from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Profile from "./Components/Hero/Profile";
import AxiosApi from "./Components/Axios/Axios";
import Menu from "./Components/Pages/Menu/Menu";
import Head from "./Components/Pages/Head/Head";
import Video from "./Components/Pages/Video/Video";

function AuthenticatedApp() {

  return (
    <>

      <div className="container">
        <Home />

        <div className="page__info">
          <Menu />
          <Routes>
            <Route path="/" element={<Head />} />
            <Route path="/Home" element={<Head />} />
            <Route path="/Axios" element={<AxiosApi />} />
            <Route path="/video/:user_id" element={<Video />} />
            <Route path="/profile/:user_id" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </>
  );
}


export default AuthenticatedApp;