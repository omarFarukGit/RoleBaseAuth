import { Router } from "express";
import { IssueController } from "./issue.controllers";

const router=Router();

router.post('/',IssueController.createIsuue)
router.get('/',IssueController.getIssues)

export const IssueRoute=router;
