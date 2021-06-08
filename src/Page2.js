import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Page3 from "./Page3";


function Page2() {
  const [data, setData] = useState(false);
  console.log(`Page2:${data}`);
  if (!data) {
    setData(true);
  }

  // const history = useHistory();

  const location = useLocation()
  useEffect(() => {
    console.log(`location2:${location.pathname}`)
    console.log(`location2:${location.search}`)
    console.log(`location2:${location.hash}`)
    console.log(`location2:${location.state}`)
  }, [location]);

  return (
    <div className="App">
      {/* page2 */}
      {/* <button onClick={() => history.push("/P2/P3")}>page3</button> */}
      <Router>
        <Link to="/P2-P3">Page3</Link>
        <div>
          <Route path="/P2-P3" component={Page3} />
        </div>
      </Router>
    </div>
  );
}

export default Page2;
