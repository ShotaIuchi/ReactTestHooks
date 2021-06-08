import { useEffect, useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Page3 from "./Page3";
import Page4 from "./Page4";


function Page2() {
  const [data, setData] = useState(false);
  console.log(`Page2:${data}`);
  if (!data) {
    setData(true);
  }

  const history = useHistory();

  const location = useLocation()
  useEffect(() => {
    console.log(`location2:${location.pathname}`)
    console.log(`location2:${location.search}`)
    console.log(`location2:${location.hash}`)
    console.log(`location2:${location.state}`)
  }, [location]);

  const match = useRouteMatch();

  return (
    <div className="App">
      page2
      <br/>
      <button onClick={() => history.push("/P2/P33")}>page3(/P2/P33)</button>
      <br/>
      <button onClick={() => history.push("/P2-P3B")}>page3(/P2-P3B)</button>
      <br/>
      <Router>
        <Link to="/P2-P3A">page3(/P2-P3A)</Link>
        <br/>
        <Link to="/P2/P3">page3(/P2/P3(mach))</Link>
        <br/>
        ##############################################
        <br/>
        <div>
          <Route path="/P2-P3A" component={Page3} />
          <Route path={`${match.path}/P4`} component={Page4} />
          <Route path={`${match.path}/P3`} component={Page3} />
        </div>
      </Router>
    </div>
  );
}

export default Page2;
