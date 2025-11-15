import { createSlice } from "@reduxjs/toolkit";

interface AgentState {
  requests: any[];
}

const initialState: AgentState = {
  requests: [],
};

const agentSlice = createSlice({
  name: "agent",
  initialState,
  reducers: {
    setRequests: (state, action) => {
      state.requests = action.payload;
    },
  },
});

export const { setRequests } = agentSlice.actions;
export default agentSlice.reducer;
