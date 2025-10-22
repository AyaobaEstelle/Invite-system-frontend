export interface User {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  token: any;
  id: string;
  name: string;
  email: string;
  role: "admin" | "employee";
  createdAt: string;
  updatedAt: string;
  used?: boolean;
}
