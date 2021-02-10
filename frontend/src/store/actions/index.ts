import { CommentsAction } from "../comments/actions";
import { PostAction } from "../posts/actions";
import { PublicationAction } from "./publications";
import { UserAction } from "./users";

export type Action = CommentsAction | PostAction | PublicationAction | UserAction;
