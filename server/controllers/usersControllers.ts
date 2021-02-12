import { Request, Response } from "express";
import db from "../db/models";

export default {
  getUsers: (req: Request, res: Response) => {
    db.User.find({})
      .populate("post")
      .populate("publication")
      .populate("comment")
      .populate("user")
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
  getUser: (req: Request, res: Response) => {
    db.User.findById(req.params.id)
      .populate("post")
      .populate("publication")
      .populate("comment")
      .populate("user")
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
  addUser: (req: Request, res: Response) => {
    db.User.create(req.body)
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
  deleteUser: (req: Request, res: Response) => {
    db.User.findById(req.params.id)
      .then((model) => model?.remove())
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
  updateUser: (req: Request, res: Response) => {
    db.User.findByIdAndUpdate(req.params.id, req.body)
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
};
