import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from 'jwt-decode';
import { setUser } from "./userApi";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {
      isLoading: false,
      status: "",
      values: {
        nickname: "",
        name: "",
        picture: "",
        updated_at: "",
        email: "",
        email_verified: false,
        sub: ''
      },
    },
    token: {
      isLoading: false,
      status: "",
      values: {
        iss: '',
        sub: '',
        aud: [],
        iat: 0,
        exp: 0,
        azp: '',
        scope: '',
        permissions: ['x', 'y']
      },
    }
  },
  reducers: {
    clearSuccessMessage: (state, payload) => {
      // TODO: Update state to clear success message
    },
    setAccessToken: (state, { payload }) => {
      const decodeToken: any = jwt_decode(payload);
      state.token.values = decodeToken;
    }
  },
  extraReducers: {
    [setUser.pending.type]: (state, action) => {
      state.userData.status = "pending";
      state.userData.isLoading = true;
    },
    [setUser.fulfilled.type]: (state, { payload }) => {
      state.userData.status = "success";
      state.userData.values = payload;
      state.userData.isLoading = false;
    },
    [setUser.rejected.type]: (state, action) => {
      state.userData.status = "failed";
      state.userData.isLoading = false;
    },
    // [getAccessToken.pending.type]: (state, action) => {
    //   state.token.status = "pending";
    //   state.token.isLoading = true;
    // },
    // [getAccessToken.fulfilled.type]: (state, { payload }) => {
    //   state.token.status = "success";
    //   state.token.values = payload;
    //   state.token.isLoading = false;
    // },
    // [getAccessToken.rejected.type]: (state, action) => {
    //   state.token.status = "failed";
    //   state.token.isLoading = false;
    // },
  }
})

export const { setAccessToken } = userSlice.actions;


export default userSlice.reducer