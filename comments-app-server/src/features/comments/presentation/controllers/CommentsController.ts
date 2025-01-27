import { Request, Response } from 'express';
import { GetCommentsUseCase } from '../../application/useCases/GetCommentsUseCase';
import { CreateCommentDTO } from '../../domain/DTO/CreateCommentDTO';
import { CreateCommentUseCase } from '../../application/useCases/CreateCommentUseCase';
import { UpdateCommentDTO } from '../../domain/DTO/UpdateCommentDTO';
import { UpdateCommentUseCase } from '../../application/useCases/UpdateCommentUseCase';
import { DeleteCommentUseCase } from '../../application/useCases/DeleteCommentUseCase';
import { DeleteCommentDTO } from '../../domain/DTO/DeleteCommentDTO';

export class CommentsController {
  constructor(
    private getCommentsUseCase: GetCommentsUseCase,
    private createCommentUseCase: CreateCommentUseCase,
    private updateCommentUseCase: UpdateCommentUseCase,
    private deleteCommentUseCase: DeleteCommentUseCase
  ) {}

  async getComments(_req: Request, res: Response) {
    const response = await this.getCommentsUseCase.execute();
    res.status(200).json(response);
  }

  async createComment(req: Request, res: Response) {
    const dto = new CreateCommentDTO(req);
    const reponse = await this.createCommentUseCase.execute(dto);
    res.status(200).json(reponse);
  }

  async updateComment(req: Request, res: Response) {
    const dto = new UpdateCommentDTO(req);
    const response = await this.updateCommentUseCase.execute(dto);
    res.status(200).json(response);
  }

  async deleteComment(req: Request, res: Response) {
    const { id } = new DeleteCommentDTO(req);
    const response = await this.deleteCommentUseCase.execute(id);
    res.status(200).json(response);
  }
}
