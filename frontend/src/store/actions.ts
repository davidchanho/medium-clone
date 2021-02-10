import { CommentsAction } from "./comments/actions";
import { PostAction } from "./posts/actions";
import { PublicationAction } from "./publications/actions";
import { UserAction } from "./users/actions";

export type Action = CommentsAction | PostAction | PublicationAction | UserAction;
