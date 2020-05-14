import React from "react";

export default class ContentsMemo extends React.Component {
  render() {
    return (
      <div className="contents-memo">
        <ul>
          {this.props.memo.map(({ no, 내용 }) => (
            <li key={no}>메모: {내용}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}