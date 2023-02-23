import { NextFunction, Request, Response } from "express";

const corsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const origin = req.get("origin");
  if (
    typeof origin === "string" &&
    /^https?:\/\/localhost(?::\d+)$/.test(origin)
  ) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
  }
  next();
};

export default corsMiddleware;
