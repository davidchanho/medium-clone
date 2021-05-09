import { Application, Request, response, Response } from "express";
import db from "../db/models";
import { OpenApi, Types, bodySchema } from "ts-openapi";

export default {
  getPosts: (req: Request, res: Response) => {
    db.Post.find({})
      .populate({
        path: "user",
        select: "name -_id",
        model: "user",
      })
      .populate({
        path: "publication",
        select: "icon name -_id",
        model: "publication",
      })
      .select("image title body readingTime date user publication")
      .then((model) => res.json(model))
      .catch((err) => res.status(422).json(err));
  },
  getPost: (req: Request, res: Response) => {
    db.Post.findById(req.params.id)
      .populate({
        path: "comments",
        select: "name body date -_id",
        model: "comment",
        populate: {
          path: "user",
          select: "avatar name -_id",
          model: "user",
        },
      })
      .populate({
        path: "user",
        select: "name -_id",
        model: "user",
      })
      .populate({
        path: "publication",
        select: "icon name -_id",
        model: "publication",
      })
      .select("image title body readingTime date user publication comments")
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
