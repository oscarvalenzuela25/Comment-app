import { WhereOptions } from 'sequelize';
import { CreateReplyPayload } from '../../domain/DTO/CreateReplyDTO';
import { UpdateReplyPayload } from '../../domain/DTO/UpdateReplyDTO';
import {
  ReplyDatasourceImp,
  SequelizeParams,
} from '../datasource/ReplyDatasourceImp';
import { ReplyRepository } from '../../domain/repository/ReplyRepository';

export class ReplyRepositoryImp implements ReplyRepository {
  constructor(private replyDatasourceImp: ReplyDatasourceImp) {}

  async getUser(params: SequelizeParams) {
    return this.replyDatasourceImp.getUser(params);
  }
  async createReply(payload: CreateReplyPayload) {
    return this.replyDatasourceImp.createReply(payload);
  }
  async updateReply(payload: UpdateReplyPayload, where: WhereOptions) {
    return this.replyDatasourceImp.updateReply(payload, where);
  }
  async deleteReply(where: WhereOptions) {
    return this.replyDatasourceImp.deleteReply(where);
  }
}
