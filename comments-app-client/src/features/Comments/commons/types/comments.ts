export type CommentsEntity = {
  id: number;
  userId: number;
  content: string;
  score: number;
  createdAt: Date;
  updatedAt: Date;
};

export type UserEntity = {
  id: number;
  username: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ReplyEntity = {
  id: number;
  commentId: number;
  userId: number;
  content: string;
  score: number;
  createdAt: Date;
  updatedAt: Date;
};

export type User = {
  image: string;
  username: string;
};

export type Reply = {
  id: number;
  content: string;
  createdAt: Date;
  score: number;
  replyingTo: string;
  user: User;
};

export type Comments = {
  id: number;
  content: string;
  createdAt: Date;
  score: number;
  user: User;
  replies?: Reply[];
};

export type PostData = {
  id: number;
  content: string;
  createdAt: Date;
  score: number;
  user: User;
  replyingTo?: string;
};

export type CreateCommentPayload = {
  content: string;
  username: string;
};

export type UpdateCommentPayload = {
  id: number;
  content?: string;
  score?: number;
};
