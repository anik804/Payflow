import { baseApi } from "@/services/baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/admin/users",
      providesTags: ["Admin"],
    }),
    manageAgents: builder.query({
      query: () => "/admin/agents",
      providesTags: ["Admin"],
    }),
  }),
});

export const { useGetAllUsersQuery, useManageAgentsQuery } = adminApi;
