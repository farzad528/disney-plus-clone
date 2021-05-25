import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [genres, setGenres] = useState(null);
  const fetchData = async () => {
    const response = await fetch("./netlify/functions/getGenres.js");
    const responseBody = await response.json();
    console.log(responseBody);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <></>;
}

export default App;
