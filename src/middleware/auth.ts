import type { NextFunction, Request, Response } from "express";

import Jwt, { type JwtPayload } from "jsonwebtoken";
import { pool } from "../db/db";

export const auth = (...roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        return res.status(401).json({
          success: false,
          message: "Unathorized",
        });
      }

      const decoded = Jwt.verify(token, "sfjsofhs") as JwtPayload;

      const userData = await pool.query(
        `
        SELECT * FROM users WHERE email=$1
        `,
        [decoded.email],
      );

      if (userData.rows.length === 0) {
        return res.status(401).json({
          success: false,
          message: "user not found",
        });
      }
      req.user = decoded;

      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({
          success: false,
          message: "Forbidden access",
        });
      }
      next;
    } catch (error) {
      res.status(401).json({
        success: false,
        message: "Invaild token",
      });
    }
  };
};
