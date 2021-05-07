import { Request, Response } from "express";
import db from "../db/models";

export default {
  getTopics: (req: Request, res: Response) => {
    db.Topic.find({})
      .then((model: any) => res.json(model))
      .catch((err: any) => res.status(422).json(err));
  },
  getTopic: (req: Request, res: Response) => {
    db.Topic.findById(req.params.id)
      .then((model: any) => res.json(model))
      .catch((err: any) => res.status(422).json(err));
  },
};
