import React from "react";

export default class HeaderAddMemo extends React.Component {
  a() {
    console.log("click");
  }
  render() {
    return (
      <div className="header-addmemo" onClick={this.a}>
        <a href="#">
          <i className="fas fa-plus"></i>
        </a>
      </div>
    );
  }
}
