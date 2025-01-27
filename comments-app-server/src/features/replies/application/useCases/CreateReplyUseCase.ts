import { CustomError } from '../../../comments/domain/errors/customError';
import { CreateReplyDTO } from '../../domain/DTO/CreateReplyDTO';
import { ReplyRepositoryImp } from '../../infrastructure/repository/ReplyRepositoryImp';

export class CreateReplyUseCase {
  constructor(private replyRepositoryImp: ReplyRepositoryImp) {}

  async execute(dto: CreateReplyDTO) {
    try {
      const { username, commentId, content } = dto;
      const user = await this.replyRepositoryImp.getUser({
        where: { username },
      });
      if (!user) {
        return CustomError.notFound('User not found');
      }
      const newReply = await this.replyRepositoryImp.createReply({
        commentId,
        userId: user.id,
        content,
      });
      return newReply;
    } catch (error) {
      return CustomError.internalServerError(JSON.stringify(error));
    }
  }
}
