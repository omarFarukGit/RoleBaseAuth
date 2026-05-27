import { Router } from "express";
import { IssueController } from "./issue.controllers";

const router=Router();

router.post('/',IssueController.createIsuue)
router.get('/',IssueController.getIssues)
router.get('/:id',IssueController.singleIsse)

export const IssueRoute=router;
