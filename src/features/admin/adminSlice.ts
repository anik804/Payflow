import { createSlice } from "@reduxjs/toolkit";

interface AdminState {
  users: any[];
  agents: any[];
}

const initialState: AdminState = {
  users: [],
  agents: [],
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setAgents: (state, action) => {
      state.agents = action.payload;
    },
  },
});

export const { setUsers, setAgents } = adminSlice.actions;
export default adminSlice.reducer;
