import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { AuthRouter } from "./modules/auth/auth.route";
import { IssueRoute } from "./modules/issue/issues.routes";
import { globalErrorHandler } from "./middleware/globalErrorHandler";
const app: Application = express();
const port = 3000;

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/auth", AuthRouter);
app.use("/api/issues", IssueRoute);

// handle not found route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

//global error handler

app.use(globalErrorHandler)

export default app;
