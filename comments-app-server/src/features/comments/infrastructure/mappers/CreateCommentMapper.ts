import { CommentToCreate } from '../../domain/DTO/CreateCommentDTO';
import { UserEntity } from '../../domain/entities/UserEntity';

type ToEntityPayload = {
  user: UserEntity;
  content: string;
};

export class CreateCommentMapper {
  static toEntity({ user, content }: ToEntityPayload): CommentToCreate {
    return {
      userId: user.id,
      content,
      score: 0,
    };
  }
}
