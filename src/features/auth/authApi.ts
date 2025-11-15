// src/features/auth/authApi.ts
import { baseApi } from "@/services/baseApi";
import type { LoginResponse, User } from "./types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<LoginResponse, Partial<User>>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),

    login: builder.mutation<LoginResponse, { email: string; password: string }>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
