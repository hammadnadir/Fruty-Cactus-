import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { combinedReducer } from "../redux/rootReducer";
import { createStore } from "@reduxjs/toolkit";
import {store} from "../store";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, ...pageProps }) {

  // const store = createStore(combinedReducer);
  return (
    <>
    <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
     <Provider store={store}>
      <Component {...pageProps} />
     </Provider>
     </>
  );
}

export default MyApp;
