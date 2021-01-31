import { Request, Response } from "express";
import db from "../models";

export default {
  getPosts: (req: Request, res: Response) => {
    db.Post.find({})
      .then((model) => res.json(model))
      .catch((err) => {
        res.status(422).json(err);
      });
  },
  addPost: (req: Request, res: Response) => {
    db.Post.create(req.body)
      .then((model) => res.json(model))
      .catch((err) => {
        res.status(422).json(err);
      });
  },
};
