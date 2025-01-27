import { Request, Response } from 'express';
import { CreateReplyDTO } from '../../domain/DTO/CreateReplyDTO';
import { CreateReplyUseCase } from '../../application/useCases/CreateReplyUseCase';
import { UpdateReplyUseCase } from '../../application/useCases/UpdateReplyUseCase';
import { UpdateReplyDTO } from '../../domain/DTO/UpdateReplyDTO';
import { DeleteReplyDTO } from '../../domain/DTO/DeleteReplyDTO';
import { DeleteReplyUseCase } from '../../application/useCases/DeleteReplyUseCase';

export class ReplyController {
  constructor(
    private createReplyUseCase: CreateReplyUseCase,
    private updateReplyUseCase: UpdateReplyUseCase,
    private deleteReplyUseCase: DeleteReplyUseCase
  ) {}

  async createReply(req: Request, res: Response) {
    const dto = new CreateReplyDTO(req);
    const response = await this.createReplyUseCase.execute(dto);
    res.status(200).json(response);
  }

  async updateReply(req: Request, res: Response) {
    const dto = new UpdateReplyDTO(req);
    const response = await this.updateReplyUseCase.execute(dto);
    res.status(200).json(response);
  }

  async deleteReply(req: Request, res: Response) {
    const dto = new DeleteReplyDTO(req);
    const response = await this.deleteReplyUseCase.execute(dto);
    res.status(200).json(response);
  }
}
