import express from "express";
import moviesRouter from "./routes/movies.js";

const app = express();
const port = 9000;

app.use(express.json());

app.use("/movies", moviesRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
