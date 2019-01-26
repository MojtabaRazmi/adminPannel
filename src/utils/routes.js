import React from 'react';
import Loadable from 'react-loadable'

import App from './../App';

function Loading() {
  return <div>Loading...</div>;
}

const Test = Loadable({
  loader: () => import('./../components/test'),
  loading: Loading,
});

const Test2 = Loadable({
  loader: () => import('./../components/test2'),
  loading: Loading,
});



// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: App },
  { path: '/base', exact: true, name: 'Base', component: Test },
  { path: '/base/cards', name: 'Cards', component: Test2 },

];

export default routes;
