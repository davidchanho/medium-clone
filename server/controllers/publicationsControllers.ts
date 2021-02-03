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
  addPublication: (req: Request, res: Response) => {
    db.Publication.create(req.body)
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
  seedPublications: (req: Request, res: Response) => {
    db.Publication.insertMany(req.body)
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
  updatePublication: (req: Request, res: Response) => {
    db.Publication.findByIdAndUpdate(req.params.id, req.body)
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
  getPublicationPosts: (req: Request, res: Response) => {
    db.Publication.findById(req.params.id)
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
};
