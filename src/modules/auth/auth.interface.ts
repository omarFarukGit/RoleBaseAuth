export interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
  role?: string;
}

export interface IIusse {
  id?: number;
  title: string;
  description: string;
  status?: "open" | "resoveld";
}
