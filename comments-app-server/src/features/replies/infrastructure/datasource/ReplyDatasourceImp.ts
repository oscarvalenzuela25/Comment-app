import { FindAttributeOptions, Includeable, WhereOptions } from 'sequelize';
import { UserEntity } from '../../../comments/domain/entities/UserEntity';
import { Reply, User } from '../../../../models';
import { CreateReplyPayload } from '../../domain/DTO/CreateReplyDTO';
import { UpdateReplyPayload } from '../../domain/DTO/UpdateReplyDTO';
import { ReplyEntity } from '../../../comments/domain/entities/ReplyEntity';
import { ReplyDatasource } from '../../domain/datasource/ReplyDatasource';

export type SequelizeParams = {
  where?: WhereOptions;
  include?: Includeable | Includeable[];
  attributes?: FindAttributeOptions;
};

export class ReplyDatasourceImp implements ReplyDatasource {
  constructor() {}

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

  async createReply(payload: CreateReplyPayload): Promise<ReplyEntity | null> {
    const newReply = await Reply.create(payload);
    return newReply ? newReply.get({ plain: true }) : null;
  }

  async updateReply(
    payload: UpdateReplyPayload,
    where: WhereOptions
  ): Promise<boolean> {
    const [rows] = await Reply.update(payload, { where });
    return !!rows;
  }

  async deleteReply(where: WhereOptions): Promise<boolean> {
    const rows = await Reply.destroy({ where });
    return !!rows;
  }
}
