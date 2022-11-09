import { combineReducers } from "@reduxjs/toolkit";
import contact from "../redux/contact";
import pagedata from "../redux/pagedata";
import global from "../redux/global";

export const combinedReducer = () =>
  combineReducers({
    contact,
    pagedata,
    global
  });
