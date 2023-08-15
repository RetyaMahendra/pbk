import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getIndividu = createAsyncThunk(`individu/getIndividu`, async (nik: string) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_INDIVIDU_SERVICE}individu/${nik}`);
    return response.data;
  } catch (error) {
    console.log(error)
    return null;
  }
});
