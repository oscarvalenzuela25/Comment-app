import { WhereOptions } from 'sequelize';
import {
  CommentsResponse,
  SequelizeParams,
} from '../../infrastructure/datasource/CommentsDatasourceImp';
import { CommentToCreate } from '../DTO/CreateCommentDTO';
import { CommentToUpdate } from '../DTO/UpdateCommentDTO';
import { CommentEntity } from '../entities/CommentEntity';
import { UserEntity } from '../entities/UserEntity';

export abstract class CommentsRepository {
  abstract getComments(params: SequelizeParams): Promise<CommentsResponse[]>;
  abstract getUser(params: SequelizeParams): Promise<UserEntity | null>;
  abstract createComment(payload: CommentToCreate): Promise<CommentEntity>;
  abstract updateComment(
    payload: CommentToUpdate,
    where: WhereOptions
  ): Promise<boolean>;
  abstract deleteComment(where: WhereOptions): Promise<boolean>;
}
