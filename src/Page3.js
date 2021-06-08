import { useState } from "react";
import { useHistory } from "react-router";
import './App.css';

function Page3() {
  const [data, setData] = useState(false);
  console.log(`Page3:${data}`);
  if (!data) {
    setData(true);
  }

  const history = useHistory();

  return (
    <div className="App">
      page3
      <button onClick={() => history.push("/P2/P3/P4")}>page4</button>
    </div>
  );
}

export default Page3;
