import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  profile: any | null;
}

const initialState: UserState = {
  profile: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { setProfile } = userSlice.actions;
export default userSlice.reducer;
