import { createSlice } from "@reduxjs/toolkit";
import { getContract } from "./contractApi";
// import { Contract } from "./contractModel";

// interface CreditSummary {
//   totalPlafon: number;
//   bakiDebet: number;
//   worstQuality: number | string | undefined;
//   data: Contract
// }

export const contractSlice = createSlice({
  name: "contract",
  initialState: {
    list: {
      isLoading: false,
      status: "",
      values: null,
    },
    creditSummary: {
      totalPlafon: 0,
      bakiDebet: 0,
      worstQuality: null,
    }
  },
  reducers: {
    clearSuccessMessage: (state, payload) => {
      // TODO: Update state to clear success message
    }
  },
  extraReducers: {
    [getContract.pending.type]: (state, action) => {
      state.list.status = "pending";
      state.list.isLoading = true;
    },
    [getContract.fulfilled.type]: (state, { payload }) => {
      state.list.status = "success";
      state.list.values = payload.data;
      state.creditSummary.totalPlafon = payload.totalPlafon;
      state.creditSummary.bakiDebet = payload.bakiDebet;
      state.creditSummary.worstQuality = payload.worstQuality;
      state.list.isLoading = false;
    },
    [getContract.rejected.type]: (state, action) => {
      state.list.status = "failed";
      state.list.isLoading = false;
    },
  }
})

export default contractSlice.reducer