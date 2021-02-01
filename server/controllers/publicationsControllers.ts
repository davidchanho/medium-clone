import { Request, Response } from "express";
import db from "../models";

export default {
  fetchPublications: (req: Request, res: Response) => {
    db.Publication.find({})
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
  fetchPublication: (req: Request, res: Response) => {
    db.Publication.findById(req.params.id)
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
  addPublication: (req: Request, res: Response) => {
    db.Publication.create(req.body)
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
  deletePublication: (req: Request, res: Response) => {
    db.Publication.findById(req.params.id)
      .then((model) => model?.remove())
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
  updatePublication: (req: Request, res: Response) => {
    db.Publication.findByIdAndUpdate(req.params.id, req.body)
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
};