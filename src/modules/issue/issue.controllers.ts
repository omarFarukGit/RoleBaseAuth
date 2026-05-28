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

const getIssues = async (req: Request, res: Response) => {
  try {
    const result = await IssueService.getAllIssuesFromDB();
    res.status(201).json({
      success: true,
      mesaage: "get all issees succesfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: true,
      mesaage: error.message,
    });
  }
};

const singleIsse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await IssueService.getSingleIssueFromDB(Number(id));
    res.status(201).json({
      success: true,
      mesaage: "get single issees succesfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: true,
      mesaage: error.message,
    });
  }
};

const deleteIssue = async (req: Request, res: Response) => {
  try {
    const result = await IssueService.issueIntroDB(req.body);
    res.status(201).json({
      success: true,
      mesaage: "issues delete  succesfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: true,
      mesaage: error.message,
    });
  }
};

const updateIssue = async (req: Request, res: Response) => {};

export const IssueController = {
  createIsuue,
  getIssues,
  singleIsse,
  deleteIssue,
  updateIssue,
};
