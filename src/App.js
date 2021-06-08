import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

function App() {
  const [data, setData] = useState(false);
  console.log(`APP:${data}`);
  if (data == false) {
    setData(true);
  }

  return (
    <div className="App">
      <Router>
        <Link to="/">Page1</Link>
        <Link to="/P2">Page2</Link>
        <div>
          <Route exact path="/" component={Page1} />
          <Route path="/P2" component={Page2} />
          <Route path="/P2/P3" component={Page3} />
        </div>
      </Router>
    </div>
  );
}

export default App;
