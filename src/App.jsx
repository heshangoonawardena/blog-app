import { useState } from "react";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <TopBar />
      <Home />
    </>
  );
}

export default App;
