import { createSlice } from "@reduxjs/toolkit";

interface TransactionState {
  recent: any[];
}

const initialState: TransactionState = {
  recent: [],
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setRecentTransactions: (state, action) => {
      state.recent = action.payload;
    },
  },
});

export const { setRecentTransactions } = transactionSlice.actions;
export default transactionSlice.reducer;
