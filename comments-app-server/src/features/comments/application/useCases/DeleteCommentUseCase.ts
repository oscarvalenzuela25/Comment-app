import { CustomError } from '../../domain/errors/customError';
import { CommentsRepositoryImp } from '../../infrastructure/repository/CommentsRepositoryImp';

export class DeleteCommentUseCase {
  constructor(private commentsRepositoryImp: CommentsRepositoryImp) {}

  async execute(commentId: number) {
    try {
      const where = { id: commentId };
      const deleted = await this.commentsRepositoryImp.deleteComment(where);
      if (!deleted) {
        return CustomError.notFound('Comment not found');
      }
      return { message: 'Comment deleted' };
    } catch (error) {
      return CustomError.internalServerError(JSON.stringify(error));
    }
  }
}
