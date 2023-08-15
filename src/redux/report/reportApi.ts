import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getReport = createAsyncThunk(`report/getReport`, async (nik: string) => {
  const startDate = Date.now();
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_API_URL}individu/${nik}`);
    const endDate = Date.now();
    return { data: response.data, time: endDate - startDate };
  } catch (error) {
    console.log(error);
    const endDate = Date.now();
    return { data: null, time: endDate - startDate };
  }
});
export const getMultiReport = createAsyncThunk(`report/getMultiReport`, async (nik: string | undefined) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_API_URL}individu/${nik}`);
    // await axios.get(`${process.env.REACT_APP_BASE_API_URL}individu/${nik}`);
    return { count: 1, data: response.data };
    // return 1;
  } catch (error) {
    console.log(error)
    return { count: 1, data: null };
  }
});
