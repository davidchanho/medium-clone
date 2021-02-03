import { Request, Response } from "express";
import db from "../db/models";

export default {
  getComments: (req: Request, res: Response) => {
    db.Comment.find({})
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
  getComment: (req: Request, res: Response) => {
    db.Comment.findById(req.params.id)
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
  addComment: (req: Request, res: Response) => {
    db.Comment.create(req.body)
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
  deleteComment: (req: Request, res: Response) => {
    db.Comment.findById(req.params.id)
      .then((model) => model?.remove())
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
  updateComment: (req: Request, res: Response) => {
    db.Comment.findByIdAndUpdate(req.params.id, req.body)
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
  seedComments: (req: Request, res: Response) => {
    db.Comment.insertMany(req.body)
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
};
