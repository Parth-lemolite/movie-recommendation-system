import express from "express";
import { specs, swaggerUi } from "./swagger.js";
import moviesRouter from "./routes/movies.js";
import "./dbConfig.js";
import movieRouter from "./routes/movies.js";
import cors from "cors";

const app = express();
const port = 9000;

app.use(express.json());
app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/", movieRouter);

app.get("/", (req, res) => {
  res.send("Hello, Swagger!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
