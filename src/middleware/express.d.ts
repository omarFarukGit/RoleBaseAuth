import type { IUser } from "../modules/auth/auth.interface";

export declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}
