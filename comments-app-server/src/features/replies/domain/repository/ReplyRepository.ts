import { WhereOptions } from 'sequelize';
import { ReplyEntity } from '../../../comments/domain/entities/ReplyEntity';
import { UserEntity } from '../../../comments/domain/entities/UserEntity';
import { SequelizeParams } from '../../infrastructure/datasource/ReplyDatasourceImp';
import { CreateReplyPayload } from '../DTO/CreateReplyDTO';

export abstract class ReplyRepository {
  abstract getUser(params: SequelizeParams): Promise<UserEntity | null>;
  abstract createReply(
    payload: CreateReplyPayload
  ): Promise<ReplyEntity | null>;
  abstract updateReply(
    payload: CreateReplyPayload,
    where: WhereOptions
  ): Promise<boolean>;
  abstract deleteReply(where: WhereOptions): Promise<boolean>;
}
