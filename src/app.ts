import express from "express";
import { candidateRouter } from "./candidate/router";
import { errorHandler } from "./errors/error-handler";
const app = express();

app.use("/cndt", candidateRouter);

app.use(errorHandler);

export { app };
