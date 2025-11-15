import { baseApi } from "@/services/baseApi";

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendMoney: builder.mutation({
      query: (data) => ({
        url: "/transactions/send",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Transaction"],
    }),
    cashIn: builder.mutation({
      query: (data) => ({
        url: "/transactions/cash-in",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Transaction"],
    }),
    cashOut: builder.mutation({
      query: (data) => ({
        url: "/transactions/cash-out",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Transaction"],
    }),
    getTransactionHistory: builder.query({
      query: () => "/transactions",
      providesTags: ["Transaction"],
    }),
  }),
});

export const {
  useSendMoneyMutation,
  useCashInMutation,
  useCashOutMutation,
  useGetTransactionHistoryQuery,
} = transactionApi;
