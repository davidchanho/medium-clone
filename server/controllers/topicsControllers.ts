import { Request, Response } from "express";
import db from "../db/models";

export default {
  getTopics: (req: Request, res: Response) => {
    db.Topic.find({})
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
};
