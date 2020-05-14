import React from "react";
import Userbell from "./userbell";
import HeaderProfile from "./headerprofile";
import HeaderAddMemo from "./headeraddmemo";

function Header({ logout }) {
  return (
    <div className="header">
      <div className="logo-div">
        <div className="logo-header">
          <img className="logo" src="http://localhost:8090/images/logo.png" />
        </div>
        <div className="logo-header-title">
          <p>ShareEditor.Md</p>
        </div>
      </div>

      <form className="search-form" action="">
        <div className="search">
          <input
            type="text"
            name="input-search"
            className="input-search"
            placeholder="검색어를 입력하세요"
          />
          <button type="submit" className="search-submit" value="검색">
            <i className="fas fa-hashtag"></i>
          </button>
        </div>
      </form>

      <div className="right-header">
        <HeaderAddMemo />

        <HeaderProfile logout={logout} />

        <Userbell />
      </div>
    </div>
  );
}
export default Header;