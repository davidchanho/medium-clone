import { CommentsAction } from "./comments";
import { PostAction } from "./posts";
import { PublicationAction } from "./publications";

export type Action = CommentsAction | PostAction | PublicationAction;
