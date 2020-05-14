import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Group from './Memo/Group';
import NotFound from './NotFound';
import Contents from './Contents/Contents'

function Routers({ match }) {

  return (
    <div>
      <Router>
        <Switch>
          {/* <Route path="/main/group/:g_no" component={Group} />
          <Route path="/:g_no" component={Group} /> */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}
export default Routers