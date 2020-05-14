import React from "react";
import { Route } from "react-router-dom";
// import { groups } from "./data.json"

function Group({ match }) {
    return (
      <div className="contents">
        {match.params.g_no}번 그룹{match.url}
      </div>
    );
  }
export default Group


