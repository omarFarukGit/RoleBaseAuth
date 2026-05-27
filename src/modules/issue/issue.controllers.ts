import type { Request, Response } from "express";
import { IssueService } from "./issue.service";

const createIsuue = async (req: Request, res: Response) => {
  try {
    const result = await IssueService.issueIntroDB(req.body);
    res.status(201).json({
      success: true,
      mesaage: "issues crated succesfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: true,
      mesaage: error.message,
    });
  }
};

export const IssueController = {
  createIsuue,
};
