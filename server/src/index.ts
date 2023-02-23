import express from "express";

import corsMiddleware from "./corsMiddleware.js";
import router from "./router.js";

const app = express();

app.use(corsMiddleware);
app.use(router);

app.listen(8042);
