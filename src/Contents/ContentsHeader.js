import React from "react";

export default class ContentsHeader extends React.Component {
  showinglist() {
    console.log("showinglist");
  }
  groupadd() {
    console.log("groupadd");
  }
  render() {
    return (
      <div className="contents-header">
        <div id="contents-header-title">
          <span>그룹이름:{this.props.groupName}</span>
        </div>
        <div id="contents-header-showinglist">
          <button onClick={this.showinglist}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div id="contents-header-groupadd">
          <button onClick={this.groupadd}>
            <i className="fas fa-users"></i>
          </button>
        </div>
      </div>
    );
  }
}