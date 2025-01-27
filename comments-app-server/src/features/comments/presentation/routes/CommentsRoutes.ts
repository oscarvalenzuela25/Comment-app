import { Router } from 'express';
import { CommentsDatasourceImp } from '../../infrastructure/datasource/CommentsDatasourceImp';
import { CommentsRepositoryImp } from '../../infrastructure/repository/CommentsRepositoryImp';
import { GetCommentsUseCase } from '../../application/useCases/GetCommentsUseCase';
import { CreateCommentUseCase } from '../../application/useCases/CreateCommentUseCase';
import { UpdateCommentUseCase } from '../../application/useCases/UpdateCommentUseCase';
import { DeleteCommentUseCase } from '../../application/useCases/DeleteCommentUseCase';
import { CommentsController } from '../controllers/CommentsController';
import { validateSchema } from '../../../../middleware/schemaValidator';
import {
  createCommentBodySchema,
  deleteCommentParamsSchema,
  updateCommentBodySchema,
  updateCommentParamsSchema,
} from '../../../../validators/commentSchemaValidator';

export class CommentsRouter {
  static get getRoutes() {
    const router = Router();
    const commentsDatasourceImp = new CommentsDatasourceImp();
    const commentsRepositoryImp = new CommentsRepositoryImp(
      commentsDatasourceImp
    );
    const getCommentsUseCase = new GetCommentsUseCase(commentsRepositoryImp);
    const createCommentUseCase = new CreateCommentUseCase(
      commentsRepositoryImp
    );
    const updateCommentUseCase = new UpdateCommentUseCase(
      commentsRepositoryImp
    );
    const deleteCommentUseCase = new DeleteCommentUseCase(
      commentsRepositoryImp
    );
    const controller = new CommentsController(
      getCommentsUseCase,
      createCommentUseCase,
      updateCommentUseCase,
      deleteCommentUseCase
    );

    router.get(
      '/api/v1/comments',
      controller.getComments.bind(controller),
      controller.getComments
    );

    router.post(
      '/api/v1/comment',
      validateSchema(createCommentBodySchema),
      controller.createComment.bind(controller),
      controller.createComment
    );

    router.put(
      '/api/v1/comment/:id',
      validateSchema(updateCommentParamsSchema, 'params'),
      validateSchema(updateCommentBodySchema),
      controller.updateComment.bind(controller),
      controller.updateComment
    );

    router.delete(
      '/api/v1/comment/:id',
      validateSchema(deleteCommentParamsSchema, 'params'),
      controller.deleteComment.bind(controller),
      controller.deleteComment
    );

    return router;
  }
}
