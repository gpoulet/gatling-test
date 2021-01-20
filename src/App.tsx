import React from 'react';
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import store from "./store";
import Home from "./components/Home";

function App() {
  return (
      <Provider store={store}>
        <Home/>
      </Provider>
  );
}

export default App;
