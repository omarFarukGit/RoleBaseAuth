import type { Request, Response } from "express";
import { AuthService } from "./auth.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await AuthService.createUserIntroDB(req.body);

    res.status(201).json({
      success: true,
      message: "user created sucessfully",
      data: result,
    });
  } catch (error:any) {
    res.status(500).json({
        success:false,
        message:error.message
    })
  }
};

export const AuthControllers = {
  createUser,
};
