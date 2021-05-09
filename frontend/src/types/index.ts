export type IItem = IComment | IPost | IPublication | ITopic | IUser;

export interface IComment {
  _id?: string;
  postId: string;
  userId: string;
  body: string;
  date: string;
}

export interface CommentProps {
  comment?: IComment;
}

export interface IPost {
  _id?: string;
  publication: IPublication;
  user: IUser;
  title: string;
  body: string;
  image?: string;
  readingTime: string;
  date: string;
  comments: IComment[];
  excerpt?: number;
}

export interface PostProps {
  post?: IPost;
}

export interface IPublication {
  _id: string;
  name: string;
  icon: string;
  topic: ITopic;
}

export interface PublicationProps {
  publication?: IPublication;
}

export interface ITopic {
  _id?: string;
  name: string;
}

export interface TopicProps {
  topic?: ITopic;
}

export interface IUser {
  _id?: string;
  avatar: string;
  photo: string;
  email: string;
  name: string;
  about: string;
  following: {
    users: IUser[];
    publications: IPublication[];
  };
  bookmarks: IPost[];
  posts: IPost[];
  comments: IComment[];
}

export interface UserProps {
  user?: IUser;
}
