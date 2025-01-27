export type NewReplyPayload = {
  username: string;
  commentId: number;
  content: string;
};

export type UpdateReplyPayload = {
  id: number;
  content?: string;
  score?: number;
};
