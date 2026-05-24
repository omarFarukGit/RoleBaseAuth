import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { AuthRouter } from "./modules/auth/auth.route";
const app: Application = express();
const port = 3000;

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/auth", AuthRouter);

export default app;
