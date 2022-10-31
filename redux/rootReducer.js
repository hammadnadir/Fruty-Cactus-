import { combineReducers } from "@reduxjs/toolkit";
import contact from "../redux/contact";

export const combinedReducer = () =>
  combineReducers({
    contact
  });
