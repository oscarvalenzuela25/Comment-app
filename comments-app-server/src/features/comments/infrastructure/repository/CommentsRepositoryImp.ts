import { WhereOptions } from 'sequelize';
import { CommentToCreate } from '../../domain/DTO/CreateCommentDTO';
import { CommentToUpdate } from '../../domain/DTO/UpdateCommentDTO';
import { CommentEntity } from '../../domain/entities/CommentEntity';
import { UserEntity } from '../../domain/entities/UserEntity';
import { CommentsRepository } from '../../domain/repository/CommentsRepository';
import {
  CommentsDatasourceImp,
  CommentsResponse,
  SequelizeParams,
} from './../datasource/CommentsDatasourceImp';

export class CommentsRepositoryImp implements CommentsRepository {
  constructor(private commentsDatasourceImp: CommentsDatasourceImp) {}

  async getComments(params: SequelizeParams): Promise<CommentsResponse[]> {
    return this.commentsDatasourceImp.getComments(params);
  }
  async getUser(params: SequelizeParams): Promise<UserEntity | null> {
    return this.commentsDatasourceImp.getUser(params);
  }
  async createComment(payload: CommentToCreate): Promise<CommentEntity> {
    return this.commentsDatasourceImp.createComment(payload);
  }

  async updateComment(
    payload: CommentToUpdate,
    where: WhereOptions
  ): Promise<boolean> {
    return this.commentsDatasourceImp.updateComment(payload, where);
  }

  async deleteComment(where: WhereOptions): Promise<boolean> {
    return this.commentsDatasourceImp.deleteComment(where);
  }
}
