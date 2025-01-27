import { Request } from 'express';

export type CreateReplyPayload = {
  commentId: number;
  userId: number;
  content: string;
};

export class CreateReplyDTO {
  public commentId: number;
  public username: string;
  public content: string;

  constructor(req: Request) {
    const { commentId, username, content } = req.body;
    this.commentId = commentId;
    this.username = username;
    this.content = content;
  }
}
