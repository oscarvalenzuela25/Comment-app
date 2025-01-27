import { CustomError } from '../../../comments/domain/errors/customError';
import { DeleteReplyDTO } from '../../domain/DTO/DeleteReplyDTO';
import { ReplyRepositoryImp } from '../../infrastructure/repository/ReplyRepositoryImp';

export class DeleteReplyUseCase {
  constructor(private replyRepositoryImp: ReplyRepositoryImp) {}

  async execute(dto: DeleteReplyDTO) {
    try {
      const { id } = dto;
      const replyDeleted = await this.replyRepositoryImp.deleteReply({
        id,
      });
      if (!replyDeleted) {
        return CustomError.notFound('Reply not found');
      }

      return { message: 'Reply deleted successfully' };
    } catch (error) {
      return CustomError.internalServerError(JSON.stringify(error));
    }
  }
}
