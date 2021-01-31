import { Request, Response } from "express";
import db from "../models";

export default {
  getPosts: (req: Request, res: Response) => {
    db.Post.find({})
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
  getPost: (req: Request, res: Response) => {
    db.Post.findById(req.params.id)
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
  addPost: (req: Request, res: Response) => {
    db.Post.create(req.body)
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
  deletePost: (req: Request, res: Response) => {
    db.Post.findById(req.params.id)
      .then((model) => model?.remove())
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
  updatePost: (req: Request, res: Response) => {
    db.Post.findByIdAndUpdate(req.params.id, req.body)
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
};
