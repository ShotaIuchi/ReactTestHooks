import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import './App.css';

function Page1() {
  const [data, setData] = useState(false);
  console.log(`Page1:${data}`);
  if (!data) {
    setData(true);
  }

  const history = useHistory();

  const location = useLocation()
  useEffect(() => {
    console.log(`location1:${location.pathname}`)
    console.log(`location1:${location.search}`)
    console.log(`location1:${location.hash}`)
    console.log(`location1:${location.state}`)
  }, [location]);

  return (
    <div className="App">
      page1
      <button onClick={() => history.push("/P3")}>page3</button>
      <button onClick={() => history.push("/P2/P3")}>page2-3</button>
    </div>
  );

}

export default Page1;
