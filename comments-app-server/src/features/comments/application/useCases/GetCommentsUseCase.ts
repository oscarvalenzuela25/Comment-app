import { Reply, User } from '../../../../models';
import { CustomError } from '../../domain/errors/customError';
import { GetCommentsMapper } from '../../infrastructure/mappers/GetCommentsMapper';
import { CommentsRepositoryImp } from '../../infrastructure/repository/CommentsRepositoryImp';

export class GetCommentsUseCase {
  constructor(private commentsRepositoryImp: CommentsRepositoryImp) {}

  async execute() {
    try {
      const comments = await this.commentsRepositoryImp.getComments({
        include: [
          {
            model: User,
            attributes: ['username', 'avatar'],
          },
          {
            model: Reply,
            include: [{ model: User, attributes: ['username', 'avatar'] }],
          },
        ],
      });

      return GetCommentsMapper.execute(comments);
    } catch (error) {
      throw CustomError.internalServerError();
    }
  }
}
