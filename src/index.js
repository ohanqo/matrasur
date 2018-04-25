import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { addLocaleData } from "react-intl";
import fr from "react-intl/locale-data/fr";
import en from "react-intl/locale-data/en";
import reducer from "./rootReducer";
//import { localeSet } from "./actions/locale";

addLocaleData(en);
addLocaleData(fr);

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

/* if (localStorage.applang) {
  store.dispatch(localeSet(localStorage.applang));
} */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
