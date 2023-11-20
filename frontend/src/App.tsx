import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import "./App.css";

const App = () => {
  const [message, setMessage] = useState<string>("");

  const getData = async () => {
    const data: AxiosResponse = await axios.get("http://localhost:3000");
    setMessage(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <p>{message}</p>
    </>
  );
};

export default App;
