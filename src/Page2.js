import { useState } from "react";
import { useHistory } from "react-router";
import "./App.css";

function Page2() {
  const [data, setData] = useState(false);
  console.log(`Page2:${data}`);
  if (!data) {
    setData(true);
  }

  const history = useHistory();

  return (
    <div className="App">
      page2
      <button onClick={() => history.push("/P2/P3")}>page3</button>
    </div>
  );
}

export default Page2;
