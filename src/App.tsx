import React, { useState, useEffect } from "react";
import Main from "./components/main/main";
import Loader from "./components/loader/loader";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <Main />
    </React.Fragment>
  );
};

export default App;
