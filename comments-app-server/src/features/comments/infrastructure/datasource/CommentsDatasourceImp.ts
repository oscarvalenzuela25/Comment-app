import { WhereOptions, Includeable, FindAttributeOptions } from 'sequelize';
import { Comment, User } from '../../../../models';
import { CommentEntity } from '../../domain/entities/CommentEntity';
import { UserEntity } from '../../domain/entities/UserEntity';
import { ReplyEntity } from '../../domain/entities/ReplyEntity';
import { CommentsDatasource } from '../../domain/datasource/CommentsDatasource';
import { CommentToCreate } from '../../domain/DTO/CreateCommentDTO';
import { CommentToUpdate } from '../../domain/DTO/UpdateCommentDTO';

export type SequelizeParams = {
  where?: WhereOptions;
  include?: Includeable | Includeable[];
  attributes?: FindAttributeOptions;
};

export type CommentsResponse = CommentEntity & {
  User?: UserEntity;
  Replies?: Array<ReplyEntity & { User?: UserEntity }>;
};

export class CommentsDatasourceImp implements CommentsDatasource {
  constructor() {}

  async getComments({
    where,
    include,
    attributes,
  }: SequelizeParams): Promise<CommentsResponse[]> {
    const comments = await Comment.findAll({
      where,
      include,
      attributes,
    });

    return comments.map(comment => comment.get({ plain: true }));
  }

  async getUser({
    where,
    include,
    attributes,
  }: SequelizeParams): Promise<UserEntity | null> {
    const user = await User.findOne({
      where,
      include,
      attributes,
    });

    return user ? user.get({ plain: true }) : null;
  }

  async createComment(payload: CommentToCreate): Promise<CommentEntity> {
    const comment = await Comment.create(payload);
    return comment.get({ plain: true });
  }

  async updateComment(
    payload: CommentToUpdate,
    where: WhereOptions
  ): Promise<boolean> {
    const [comment] = await Comment.update(payload, { where });
    return !!comment;
  }

  async deleteComment(where: WhereOptions): Promise<boolean> {
    const comment = await Comment.destroy({ where });
    return !!comment;
  }
}
