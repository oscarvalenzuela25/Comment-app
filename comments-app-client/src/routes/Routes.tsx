import { Route, Switch } from 'wouter';
import CommentsRoutes from '../features/Comments/routes/CommentsRoutes';

const Routes = () => {
  return (
    <Switch>
      <CommentsRoutes />

      {/* Default route in a switch */}
      <Route>404: No such page!</Route>
    </Switch>
  );
};

export default Routes;
