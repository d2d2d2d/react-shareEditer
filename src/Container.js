import React from "react";

import ApiService from "./ApiService";
import Header from "./header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Routers from "./Routers";
import Contents from "./Contents/Contents";
import Router1 from "./Router1";
import Footer from "./Footer";
import { users } from "./data.json";
import { hashs } from "./hashData.json";

function Container({logout}) {

  // componentDidMount() {
  //   ApiService.fetchMain().catch(err => {
  //     console.log('error', err)
  //   });
  // }

  return (
    <div className="container">
      <Header logout={logout} />
      <Sidebar users={users} hashs={hashs} />
      <Contents users={users} />
      {/* <Routers /> */}
      <Footer />
    </div>
  );
}
export default Container;