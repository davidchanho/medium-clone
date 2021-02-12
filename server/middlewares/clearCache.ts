import { NextFunction, Response } from "express";
import clearHash from "../services/cache";

const clearCache = (req: any, res: Response, next: NextFunction) => {
  next();

  clearHash(req.user.id);
};

export default clearCache;
