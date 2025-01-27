import { CreateCommentDTO } from '../../domain/DTO/CreateCommentDTO';
import { CustomError } from '../../domain/errors/customError';
import { CreateCommentMapper } from '../../infrastructure/mappers/CreateCommentMapper';
import { CommentsRepositoryImp } from './../../infrastructure/repository/CommentsRepositoryImp';

export class CreateCommentUseCase {
  constructor(private commentsRepositoryImp: CommentsRepositoryImp) {}

  async execute(payload: CreateCommentDTO) {
    try {
      const { username, content } = payload;
      const user = await this.commentsRepositoryImp.getUser({
        where: { username },
      });
      if (!user) {
        return CustomError.notFound('User not found');
      }

      const commentPayload = CreateCommentMapper.toEntity({ user, content });
      return await this.commentsRepositoryImp.createComment(commentPayload);
    } catch (error) {
      return CustomError.internalServerError();
    }
  }
}
