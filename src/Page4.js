import { useEffect } from "react";
import { useLocation } from "react-router";

import './App.css';

function Page4() {

  // const [data, setData] = useState(false)
  // if (!data) {
  //   setData(true)
  // }

  const location = useLocation()
  useEffect(() => {
    console.log(`location4:${location.pathname}`)
    console.log(`location4:${location.search}`)
    console.log(`location4:${location.hash}`)
    console.log(`location4:${location.state}`)
  }, [location]);

  return (
    <div className="App">
      page4
    </div>
  );
}

export default Page4;
