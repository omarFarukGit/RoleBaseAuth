import type { Request, Response } from "express";
import { IssueService } from "./issue.service";

const createIsuue = async (req:Request,res:Response) => {

    try {
        const result=await IssueService.issueIntroDB()
        
    } catch (error:any) {
        res.status(500).json({
            success:true,
            mesaage:error.message
        })
    }
    
};

export const IssueController = {
  createIsuue,
};
