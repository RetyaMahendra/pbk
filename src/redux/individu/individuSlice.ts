import { createSlice } from "@reduxjs/toolkit";
import { getIndividu } from "./individuApi";

export const individuSlice = createSlice({
  name: "individu",
  initialState: {
    list: {
      isLoading: false,
      status: "",
      values: null,
    },
  },
  reducers: {
    clearSuccessMessage: (state, payload) => {
      // TODO: Update state to clear success message
    }
  },
  extraReducers: {
    [getIndividu.pending.type]: (state, action) => {
      state.list.status = "pending";
      state.list.isLoading = true;
    },
    [getIndividu.fulfilled.type]: (state, { payload }) => {
      state.list.status = "success";
      state.list.values = payload;
      state.list.isLoading = false;
    },
    [getIndividu.rejected.type]: (state, action) => {
      state.list.status = "failed";
      state.list.isLoading = false;
    },
  }
})

export default individuSlice.reducer