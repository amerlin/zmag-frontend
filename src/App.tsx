import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import Main from "./components/main/main";
import Loader from "./components/loader/loader";
import { configureStore } from "./Data/Store";
import "./App.css";

const store = configureStore();

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
