import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./Common/System/configStore";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from "./Pages/App/App";
import '@atlaskit/css-reset'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);