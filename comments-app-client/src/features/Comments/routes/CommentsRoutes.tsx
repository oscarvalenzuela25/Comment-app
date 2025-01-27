import { FC } from 'react';
import { Route } from 'wouter';
import Comments from '../pages/Comments';

const CommentsRoutes: FC = () => {
  return <Route path="/" component={Comments} />;
};

export default CommentsRoutes;
