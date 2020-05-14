import React from "react";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class Sidebar extends React.Component {

  constructor() {
    super(...arguments);
    this.state = {
      showDetails: false,
      keyword: "",
      hash: null,
      g_no: null
    }
  }

  onInputChange(e) {
    this.setState({
      keyword: e.target.value
    })
  };

  render() {
    let hashtagList;
    if (this.state.showDetails) {
      this.state.hash = this.props.hashs.filter(hash => hash.g_no === this.state.g_no);
      hashtagList = (<div>
        <h5>해시태그</h5>
        <input 
        type='text'
          value={this.keyword}
          placeholder="해시 태그 검색"
          onChange={this.onInputChange.bind(this)} />
        <Nav className="sidebar-nav">
          {this.state.hash && this.state.hash
          .filter(element => element.hash_name.indexOf(this.state.keyword) != -1)
          .map(({ no, hash_name }) => (
            <Nav.Link href="#" key={no} className="sidebar-nav-menu">{hash_name}</Nav.Link>
          ))}
        </Nav>
      </div>
      )
    }

    return (
      <div className="sidebar">
        <Nav className="sidebar-nav">
          <Nav.Link href="#"
            onClick={() => this.setState({
              showDetails: true,
              g_no: 0
            })}
            className="sidebar-nav-menu"> 개인메모 </Nav.Link>
          <NavDropdown title="그룹메모" className="sidebar-nav-menu" drop="right">

            {this.props.users.map(({ g_no, g_name }) => (
              <NavDropdown.Item href="#"
                onClick={() => this.setState({
                  showDetails: true,
                  g_no: parseInt(`${ g_no }`)
                })}
                className="sidebar-nav-menu-groupmenu"> {g_name} </NavDropdown.Item>
            ))}

          </NavDropdown>
        </Nav>
        <div className="sidebar-nav-menu">
          {hashtagList}
        </div>
      </div>
    );
  }
}