import { Server } from "http";
import { app } from "./src/app";
import db from "./src/database/models";

const port = 3000;
let server: Server;

const start = () => {
  db.sequelize.sync().then(() => {
    server = app.listen(port, () => {
      console.log(`Server listening at: http://localhost:${port}`);
    });
  });
};

export const stop = () => server.close();

start();
