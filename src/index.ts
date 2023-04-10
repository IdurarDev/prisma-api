import * as dotenv from "dotenv";
import express, { json } from "express";
import cors from "cors";

import { userRouter } from "./user/user.router";
import { plantRouter } from "./plant/plant.router";
import { articleRouter } from "./article/article.router";

dotenv.config();
// if not port don't just exiting application
if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(json());
app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter)
app.use("/api/plants", plantRouter)
app.use("/api/articles", articleRouter)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
