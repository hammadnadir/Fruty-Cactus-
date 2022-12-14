import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import request, { request2, baseURL2 } from "../request";
// import { toast } from "react-toastify";
// import RequestMessage from "../../src/RequestMessage";

const initialState = {
  homeData: [],
  isLoading: false,
};

export const sentDataRequest = createAsyncThunk(
  "home/sentDataRequest",
  async (_, thunkAPI) => {
    try {
      let response;
      response = await axios
        .get(`${baseURL2}api/home-api`)
        .then((response) => response.data);
      // toast(<RequestMessage message="Message sent successfully!" />);
      return response;
    } catch (error) {
      console.log("Error", error);
      // toast(<RequestMessage icon="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" message="Message failed!" />);
      return null;
    }
  }
);

export const homeDataSlice = createSlice({
  name: "homeData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      console.log("HYDRATE", action.payload);
      state.homeData = action?.payload?.home?.homeData?.banner?.length > 0 && action?.payload?.home?.homeData?.footer?.length > 0 && action?.payload?.home?.homeData?.header?.length > 0 && action?.payload?.home?.homeData?.home?.length > 0 && action?.payload?.home?.homeData?.product?.length > 0 ?  action.payload.home.homeData : state?.homeData;
      // state.homeData = action?.payload?.banner ? action.payload.banner : state?.homeData;
      // state.home = action?.payload?.home ? action.payload.home : state?.home;
      // state.footer = action?.payload?.footer ? action.payload.footer : state?.footer;
      // state.header = action?.payload?.header ? action.payload.header : state?.header;
      //   state.usersQuery = action?.payload?.user?.users?.usersQuery?.id ? action.payload.user.users.usersQuery : state?.usersQuery;
    });
    builder.addCase(sentDataRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(sentDataRequest.fulfilled, (state, action) => {
      state.homeData = action.payload;
      state.isLoading = false;
    });
    builder.addCase(sentDataRequest.rejected, (state, action) => {
      state.isLoading = false;
      console.log("Error:", { message: action.payload.message });
    });
  },
});

export default homeDataSlice.reducer;
