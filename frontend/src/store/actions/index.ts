import { CommentsAction } from "./comments";
import { PostAction } from "./posts";
import { PublicationAction } from "./publications";
import { UserAction } from "./users";

export type Action = CommentsAction | PostAction | PublicationAction | UserAction;
