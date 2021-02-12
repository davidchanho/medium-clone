import { Request, Response } from "express";
import db from "../db/models";

export default {
  getPublications: (req: Request, res: Response) => {
    db.Publication.find({})
      .populate("posts")
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
  getPublication: (req: Request, res: Response) => {
    db.Publication.findById(req.params.id)
      .populate("posts")
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
};
