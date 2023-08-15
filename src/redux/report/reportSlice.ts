import { createSlice } from "@reduxjs/toolkit";
import { getMultiReport, getReport } from "./reportApi";

export const individuSlice = createSlice({
  name: "report",
  initialState: {
    list: {
      isLoading: false,
      status: "",
      values: null,
      time: 0,
    },
    multiReport: {
      isLoading: false,
      status: "",
      values: [],
      count: 0,
      startTime: '',
      endTime: '',
    }
  },
  reducers: {
    clearSuccessMessage: (state, payload) => {
      // TODO: Update state to clear success message
    },
    clearMultiReport: (state, payload) => {
      state.multiReport = {
        isLoading: false,
        status: "",
        values: [],
        count: 0,
        startTime: '',
        endTime: '',
      };
    },
    setStartTime: (state, { payload }) => {
      state.multiReport.startTime = payload;
    },
    setEndTime: (state, { payload }) => {
      state.multiReport.endTime = payload;
    },
  },
  extraReducers: {
    [getReport.pending.type]: (state, action) => {
      state.list.status = "pending";
      state.list.isLoading = true;
    },
    [getReport.fulfilled.type]: (state, { payload }) => {
      state.list.status = "success";
      state.list.values = payload.data;
      state.list.time = payload.time;
      state.list.isLoading = false;
    },
    [getReport.rejected.type]: (state, action) => {
      state.list.status = "failed";
      state.list.isLoading = false;
    },
    [getMultiReport.pending.type]: (state, action) => {
      state.multiReport.status = "pending";
      state.multiReport.isLoading = true;
    },
    [getMultiReport.fulfilled.type]: (state, { payload }) => {
      state.multiReport.status = "success";
      state.multiReport.values = state.multiReport.values.concat(payload.data);
      state.multiReport.count = state.multiReport.count + payload.count;
      state.multiReport.isLoading = false;
    },
    [getMultiReport.rejected.type]: (state, action) => {
      state.multiReport.status = "failed";
      state.multiReport.isLoading = false;
    },
  }
})

export const { setStartTime, setEndTime, clearMultiReport } = individuSlice.actions;

export default individuSlice.reducer