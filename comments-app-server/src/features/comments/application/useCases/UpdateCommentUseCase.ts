import { UpdateCommentDTO } from '../../domain/DTO/UpdateCommentDTO';
import { CustomError } from '../../domain/errors/customError';
import { CommentsRepositoryImp } from '../../infrastructure/repository/CommentsRepositoryImp';

export class UpdateCommentUseCase {
  constructor(private commentsRepositoryImp: CommentsRepositoryImp) {}

  async execute(payload: UpdateCommentDTO) {
    try {
      const { id, content, score } = payload;
      const where = { id };
      const updated = await this.commentsRepositoryImp.updateComment(
        { content, score },
        where
      );
      if (!updated) {
        return CustomError.notFound('Comment not found');
      }
      return { message: 'Comment updated' };
    } catch (error) {
      return CustomError.internalServerError(JSON.stringify(error));
    }
  }
}
