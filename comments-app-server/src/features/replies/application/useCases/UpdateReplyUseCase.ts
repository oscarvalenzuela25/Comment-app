import { CustomError } from '../../../comments/domain/errors/customError';
import { UpdateReplyDTO } from '../../domain/DTO/UpdateReplyDTO';
import { ReplyRepositoryImp } from '../../infrastructure/repository/ReplyRepositoryImp';

export class UpdateReplyUseCase {
  constructor(private replyRepositoryImp: ReplyRepositoryImp) {}

  async execute(dto: UpdateReplyDTO) {
    try {
      const { id, ...payload } = dto;
      const replyUpdated = await this.replyRepositoryImp.updateReply(payload, {
        id,
      });
      if (!replyUpdated) {
        return CustomError.notFound('Reply not found');
      }

      return { message: 'Reply updated successfully' };
    } catch (error) {
      console.log(error);
      throw CustomError.internalServerError(JSON.stringify(error));
    }
  }
}
