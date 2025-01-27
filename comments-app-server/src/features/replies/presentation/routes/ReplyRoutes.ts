import { Router } from 'express';
import { ReplyDatasourceImp } from '../../infrastructure/datasource/ReplyDatasourceImp';
import { ReplyRepositoryImp } from '../../infrastructure/repository/ReplyRepositoryImp';
import { CreateReplyUseCase } from '../../application/useCases/CreateReplyUseCase';
import { UpdateReplyUseCase } from '../../application/useCases/UpdateReplyUseCase';
import { DeleteReplyUseCase } from '../../application/useCases/DeleteReplyUseCase';
import { ReplyController } from '../controllers/ReplyController';
import { validateSchema } from '../../../../middleware/schemaValidator';
import {
  createReplyBodySchema,
  deleteReplyParamsSchema,
  updateReplyBodySchema,
  updateReplyParamsSchema,
} from '../../../../validators/replySchemaValidator';

export class ReplyRoutes {
  static get getRoutes() {
    const router = Router();
    const db = new ReplyDatasourceImp();
    const replyRepositoryImp = new ReplyRepositoryImp(db);
    const createReplyUseCase = new CreateReplyUseCase(replyRepositoryImp);
    const updateReplyUseCase = new UpdateReplyUseCase(replyRepositoryImp);
    const deleteReplyUseCase = new DeleteReplyUseCase(replyRepositoryImp);
    const controller = new ReplyController(
      createReplyUseCase,
      updateReplyUseCase,
      deleteReplyUseCase
    );

    router.post(
      '/api/v1/reply',
      validateSchema(createReplyBodySchema),
      controller.createReply.bind(controller),
      controller.createReply
    );
    router.put(
      '/api/v1/reply/:id',
      validateSchema(updateReplyParamsSchema, 'params'),
      validateSchema(updateReplyBodySchema),
      controller.updateReply.bind(controller),
      controller.updateReply
    );
    router.delete(
      '/api/v1/reply/:id',
      validateSchema(deleteReplyParamsSchema, 'params'),
      controller.deleteReply.bind(controller),
      controller.deleteReply
    );

    return router;
  }
}
