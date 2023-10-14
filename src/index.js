import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
// import { BookTicketReducer } from "./BookTicket/redux/reducer/reducer";
import { BookTicketReducer } from "./Booking/redux/reducer/BookTicketReducer";
import { createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
let store = createStore(
  BookTicketReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();