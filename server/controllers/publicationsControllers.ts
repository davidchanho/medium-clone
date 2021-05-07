import { Request, Response } from "express";
import db from "../db/models";

export default {
  getPublications: (req: Request, res: Response) => {
    db.Publication.find({})
      .select("name")
      .then((model: any) => res.json(model))
      .catch((err: any) => res.status(422).json(err));
  },
  getPublication: (req: Request, res: Response) => {
    db.Publication.findById(req.params.id)
      .populate({
        path: "posts",
        select: "-comments",
        model: "post",
        populate: {
          path: "user",
          select: "name -_id",
          model: "user",
        },
      })
      .populate({
        path: "posts",
        select: "-comments",
        model: "post",
        populate: {
          path: "publication",
          select: "icon name -_id",
          model: "publication",
        },
      })
      .select("posts")
      .then((model: any) => res.json(model))
      .catch((err: any) => res.status(422).json(err));
  },
};
