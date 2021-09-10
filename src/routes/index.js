import { Redirect, Route, Switch } from 'react-router-dom';
/* Import Components */
import { NavBar, ProtectedRoute, } from 'components';

/* Import Route Components */
import { Home } from './home';
import { Profile } from './profile';
import { AuthRoutes } from './auth';

export const Routes = () => 
{
  return (
    <Switch>
      <Route path="/auth" component={AuthRoutes} />
      <Route>
        <NavBar />
              <Switch>
                <Route exact path="/" component={Home} />
                <ProtectedRoute exact path="/profile" component={Profile} />
                <Redirect to="/" />
              </Switch>
      </Route>
    </Switch>
  );
};