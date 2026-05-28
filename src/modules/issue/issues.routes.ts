import { Router } from "express";
import { IssueController } from "./issue.controllers";

const router = Router();

router.post("/", IssueController.createIsuue);
router.get("/", IssueController.getIssues);
router.get("/:id", IssueController.singleIsse);
router.delete("/:id", IssueController.deleteIssue);

export const IssueRoute = router;
