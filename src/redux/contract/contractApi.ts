import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { Contract } from "./contractModel";

export const getContract = createAsyncThunk(`contract/getContract`, async (nik: string) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_CONTRACT_SERVICE}contract/${nik}`);
    // return [...response.data, ...response.data];
    let totalPlafon: number = 0;
    let bakiDebet: number = 0;
    // let worstQuality= null;

    if (response.data.length !== 0) {
      response.data?.forEach((value: Contract) => {
        if (value.plafon) {
          totalPlafon += value.plafon;
        }
        if (value.baki_Debet) {
          bakiDebet += value.baki_Debet;
        }
        return
      });
      // worstQuality = response.data.sort((a, b) => a.kode_Kualitas_Kredit_atau_Pembiayaan - b.kode_Kualitas_Kredit_atau_Pembiayaan)
    }
    return { data: response.data, totalPlafon, bakiDebet };
  } catch (error) {
    console.log(error)
    return { data: null, totalPlafon: 0, bakiDebet: 0 };
  }
});
