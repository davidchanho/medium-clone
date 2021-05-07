import { Request, Response } from "express";
import db from "../db/models";

export default {
  getUsers: (req: Request, res: Response) => {
    db.User.find({})
      .then((model: any) => res.json(model))
      .catch((err: any) => res.status(422).json(err));
  },
  getUser: (req: Request, res: Response) => {
    db.User.findById(req.params.id)
      .select("-password")
      .then((model: any) => res.json(model))
      .catch((err: any) => res.status(422).json(err));
  },
  addUser: (req: Request, res: Response) => {
    db.User.create(req.body)
      .then((model: any) => res.json(model))
      .catch((err: any) => res.status(422).json(err));
  },
  deleteUser: (req: Request, res: Response) => {
    db.User.findById(req.params.id)
      .then((model: any) => model.remove())
      .then((model: any) => res.json(model))
      .catch((err: any) => res.status(422).json(err));
  },
  updateUser: (req: Request, res: Response) => {
    db.User.findByIdAndUpdate(req.params.id, req.body)
      .then((model: any) => res.json(model))
      .catch((err: any) => res.status(422).json(err));
  },
};
