import { Request } from 'express';

export type CommentToCreate = {
  userId: number;
  content: string;
  score: number;
};

export class CreateCommentDTO {
  public username: string;
  public content: string;

  constructor(req: Request) {
    const { username, content } = req.body;
    this.username = username;
    this.content = content;
  }
}
