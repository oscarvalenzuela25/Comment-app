import { Request } from 'express';

export type UpdateReplyPayload = {
  content?: string;
  score?: number;
};

export class UpdateReplyDTO {
  public id: number;
  public content?: string;
  public score?: number;

  constructor(req: Request) {
    const { id } = req.params;
    const { content, score } = req.body;
    this.id = +id;
    this.content = content;
    this.score = score;
  }
}
