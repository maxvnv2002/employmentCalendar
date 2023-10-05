import React from 'react';
import './App.scss';
import Calendar from "./components/Calendar/Calendar";
import {Provider} from "react-redux";
import store from "./store";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <Calendar/>
          </div>
      </Provider>

  );
}

export default App;
