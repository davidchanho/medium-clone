export interface IComment {
  _id?: string;
  postId: string;
  userId: string;
  body: string;
  date: string;
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

export interface IPublication {
  _id: string;
  name: string;
  icon: string;
  topic: string;
}

export interface ITopic {
  _id?: string;
  name: string;
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
