import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import './App.css';

function Page3() {
  const [data, setData] = useState(false);
  console.log(`Page3:${data}`);
  if (!data) {
    setData(true);
  }

  const history = useHistory();

  const location = useLocation()
  useEffect(() => {
    console.log(`location3:${location.pathname}`)
    console.log(`location3:${location.search}`)
    console.log(`location3:${location.hash}`)
    console.log(`location3:${location.state}`)
  }, [location]);

  return (
    <div className="App">
      page3
      <button onClick={() => history.push("/P2/P3/P4")}>page4</button>
    </div>
  );
}

export default Page3;
