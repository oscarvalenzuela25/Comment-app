import { Request } from 'express';

export class DeleteCommentDTO {
  public id: number;

  constructor(req: Request) {
    const { id } = req.params;
    this.id = +id;
  }
}
