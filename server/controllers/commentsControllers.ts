import { Request, Response } from "express";
import db from "../db/models";

export default {
  getComments: (req: Request, res: Response) => {
    db.Comment.find({})
      .populate({
        path: "user",
        select: "avatar name about email",
        model: "user",
      })
      .select("-postId")
      .then((model: any) => res.json(model))
      .catch((err: any) => res.status(422).json(err));
  },
  getComment: (req: Request, res: Response) => {
    db.Comment.findById(req.params.id)
      .select("-postId")
      .then((model: any) => res.json(model))
      .catch((err: any) => res.status(422).json(err));
  },
  addComment: (req: Request, res: Response) => {
    db.Comment.create(req.body)
      .then((model: any) => res.json(model))
      .catch((err: any) => res.status(422).json(err));
  },
  deleteComment: (req: Request, res: Response) => {
    db.Comment.findById(req.params.id)
      .then((model: any) => model.remove())
      .then((model: any) => res.json(model))
      .catch((err: any) => res.status(422).json(err));
  },
  updateComment: (req: Request, res: Response) => {
    db.Comment.findByIdAndUpdate(req.params.id, req.body)
      .then((model: any) => res.json(model))
      .catch((err: any) => res.status(422).json(err));
  },
};
