export interface PostProps {
  post: IPost;
}

export interface IPublication {
  _id: string;
  name: string;
  icon: string;
}

export interface IComment {
  _id?: string;
  postId: string;
  userId: string;
  body: string;
  date: string;
}

export interface IPost {
  _id?: string;
  publicationId: string;
  userId: string;
  title: string;
  body: string;
  image: string;
  date: string;
  readingTime: string;
  comments: IComment[];
}

export interface IUser {
  _id?: string;
  avatar: string;
  email: string;
  name: string;
  posts: IPost[];
  comments: IComment[];
}
