import express from "express";
import { specs, swaggerUi } from "./swagger.js";
import moviesRouter from "./routes/movies.js";

const app = express();
const port = 9000;

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/movies", moviesRouter);

app.get("/", (req, res) => {
  res.send("Hello, Swagger!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
