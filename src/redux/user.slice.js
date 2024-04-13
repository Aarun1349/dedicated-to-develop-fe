import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLogin: false,
  },
  reducers: {
    signup: (state, action) => {},
    signin: (state, action) => {},
    logout: (state, action) => {},
  },
});

export const { signin, signup, logout } = userSlice.actions;
export default userSlice.reducer;
