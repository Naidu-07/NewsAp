import Navbar from "./Components/Navbar";
import Newsboard from "./Components/Newsboard";
import { useState } from "react";

function App() {
  const [category,setCategory]=useState("general")
  return (
    <>
    <Navbar setCategory={setCategory}/>
    <Newsboard category={category}/>
    </>
  );
}

export default App;
