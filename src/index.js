import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { addLocaleData } from "react-intl";
import fr from "react-intl/locale-data/fr";
import en from "react-intl/locale-data/en";
import reducer from "./rootReducer";

addLocaleData(fr);
addLocaleData(en);

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
