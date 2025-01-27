import { Request } from 'express';

export type CommentToUpdate = {
  content: string;
  score: number;
};

export class UpdateCommentDTO {
  public id: number;
  public content: string;
  public score: number;

  constructor(req: Request) {
    const { content, score } = req.body;
    const { id } = req.params;
    this.id = +id;
    this.content = content;
    this.score = score;
  }
}
