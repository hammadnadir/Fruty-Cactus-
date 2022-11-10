import { combineReducers } from "@reduxjs/toolkit";
import contact from "../redux/contact";
import pagedata from "../redux/pagedata";
import global from "../redux/global";
import home from "../redux/home";

export const combinedReducer = () =>
  combineReducers({
    contact,
    pagedata,
    global,
    home
  });
