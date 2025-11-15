// src/features/auth/types.ts
export interface User {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  phone?: string;
  role?: "user" | "agent" | "admin";
  balance?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}
