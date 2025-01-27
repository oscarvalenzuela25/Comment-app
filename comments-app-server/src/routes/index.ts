import { Router } from 'express';

import { CommentsRouter } from '../features/comments/presentation/routes/CommentsRoutes';
import { ReplyRoutes } from '../features/replies/presentation/routes/ReplyRoutes';

export class AppRoutes {
  static get routes() {
    const router = Router();

    router.use(CommentsRouter.getRoutes);
    router.use(ReplyRoutes.getRoutes);

    return router;
  }
}
