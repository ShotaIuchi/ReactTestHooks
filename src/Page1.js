import { useState } from "react";
import { useHistory } from "react-router";
import './App.css';

function Page1() {
  const [data, setData] = useState(false);
  console.log(`Page1:${data}`);
  if (data == false) {
    setData(true);
  }

  const history = useHistory();

  return (
    <div className="App">
      page1
      <button onClick={() => history.push("/P2/P3")}>page3</button>
    </div>
  );

}

export default Page1;
