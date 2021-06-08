import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

function App() {
  const [data, setData] = useState(false);
  console.log(`APP:${data}`);
  if (!data) {
    setData(true);
  }

  return (
    <div className="App">
      <Router>
         {/* forceRefresh={false}> */}
        <Link to="/">Page1</Link>
        <Link to="/P2?hohoho=1#p34">Page2</Link>
        <Link to="/P3">Page3</Link>
        <Link to="/P2-P3B">Page3B</Link>
        <div>
          <Route exact path="/" component={Page1} />
          <Route path="/P2" component={Page2} />
          <Route path="/P3" component={Page3} />
          <Route path="/P2/P3" component={Page3} />
          <Route path="/P2-P3B" component={Page3} />
          <Route path="/P2/P3/P4" component={Page4} />
        </div>
      </Router>
    </div>
  );
}

export default App;
