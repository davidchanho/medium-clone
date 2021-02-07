export interface PostProps {
  post: IPost;
}

export interface IPublication {
  _id: string;
  name: string;
}

export interface IComment {
  _id?: string;
  postId: string;
  body: string;
  date: string;
}

export interface IPost {
  _id?: string;
  publicationId: string;
  title: string;
  body: string;
  image: string;
  date: string;
  readingTime: string;
}

export interface IUser {
  _id?: string;
  email: string;
  name: string;
  posts: IPost[];
  comments: IComment[];
}
