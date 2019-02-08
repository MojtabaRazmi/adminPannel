import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppBreadcrumb,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react'
import navigation from '../../utils/_nav'
import routes from '../../utils/routes'
import Header from './Header'

class Main extends Component {

  componentDidMount () {
    if(localStorage.getItem('token')===null){
      console.log('inja')
      this.props.history.push('/login')
    }
  }

  render() {
    return (

        <div className="app">
          <AppHeader fixed>
            <Header />
          </AppHeader>
          <div className="app-body">
            <AppSidebar fixed display="lg">
              <AppSidebarHeader />
              <AppSidebarForm />
              <AppSidebarNav navConfig={navigation} {...this.props} />
              <AppSidebarFooter />
              <AppSidebarMinimizer />
            </AppSidebar>
            <main className="main">
              <AppBreadcrumb appRoutes={routes}/>
              <Container fluid>
                <Switch>
                  {routes.map((route, idx) => {
                      return route.component ?
                        (<Route key={idx} path={route.path} exact={route.exact}
                                name={route.name} render={props => (
                          <route.component {...props} />
                        )} />)
                        : (null);
                    },
                  )}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Container>
            </main>
          </div>
        </div>
    );
  }
}

export default Main;
