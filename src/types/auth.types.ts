export interface LoginProp {
  email: string;
  password: string;
}

export interface RegisterProp extends LoginProp {
  name: string;
}

export interface User {
  token: string;
  id: string;
  name: string;
  email: string;
  role: "admin" | "employee";
  createdAt: string;
  updatedAt: string;
  used?: boolean;
}