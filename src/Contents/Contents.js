import React from "react";
import ContentsHeader from "./ContentsHeader";
import ContentsMemo from "./ContentsMemo";


export default class contents extends React.Component {
  render() {
    let users = this.props.users;
    const user = users.find(user => user.g_no === 1);

    return (
      <div className="contents">
        <ContentsHeader groupName={user.g_name} />
        <ContentsMemo memo={user.memo} />
      </div>
    );
  }
}