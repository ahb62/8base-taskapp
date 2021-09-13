import { Redirect, Route, Switch } from 'react-router-dom';
/* Import Components */
import { NavBar, ProtectedRoute, } from 'components';

/* Import Route Components */
import { Home } from './home';
import { Profile } from './profile';
import { AuthRoutes } from './auth';
import { Tasks } from './tasks';

export const Routes = () => 
{
  return (
    <Switch>
      <Route path="/auth" component={AuthRoutes} />
      <Route>
        <NavBar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/tasks" component={Tasks} />
                <ProtectedRoute exact path="/profile" component={Profile} />
                <Redirect to="/" />
              </Switch>
      </Route>
    </Switch>
  );
};