import React, {FC} from 'react'
import { Switch , Route, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes, RouteName } from '../routes';

const AppRouter: FC = () => {
  const auth = false;

  return (
      auth ?
        <Switch>
          {privateRoutes.map(route => 
            <Route 
              path={route.path} 
              exact={route.exact}
              component={route.component}
              key={route.path} 
            />
          )}
          <Redirect to={RouteName.EVENT} />
        </Switch>
        :
        <Switch>
          {publicRoutes.map(route => 
            <Route 
              path={route.path} 
              exact={route.exact}
              component={route.component}
              key={route.path} 
            />
          )}
          <Redirect to={RouteName.LOGIN} />
        </Switch>
  )
}

export default AppRouter;