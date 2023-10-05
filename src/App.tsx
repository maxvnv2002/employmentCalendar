import React, {StrictMode} from 'react';
import './App.scss';
import Calendar from "./components/Calendar/Calendar";
import {Provider} from "react-redux";
import store from "./store";

function App() {
  return (
      <Provider store={store}>
          <StrictMode>
              <div className="App">
                  <Calendar/>
              </div>
          </StrictMode>
      </Provider>

  );
}

export default App;
