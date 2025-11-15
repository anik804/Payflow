import { baseApi } from "@/services/baseApi";

export const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAgentRequests: builder.query({
      query: () => "/agents/requests",
      providesTags: ["Agent"],
    }),
    approveCashIn: builder.mutation({
      query: (id) => ({
        url: `/agents/approve/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Agent"],
    }),
  }),
});

export const { useGetAgentRequestsQuery, useApproveCashInMutation } = agentApi;
