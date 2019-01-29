import React from 'react';
import Loadable from 'react-loadable'

import App from './../App';

function Loading() {
  return <div>Loading...</div>;
}

const Admins = Loadable({
  loader: () => import('../components/sidebar/Admins'),
  loading: Loading,
});

const Customers = Loadable({
  loader: () => import('../components/sidebar/Customers'),
  loading: Loading,
});

const ProteinMarket = Loadable({
  loader: () => import('../components/sidebar/ProteinMarket'),
  loading: Loading,
});

const SuperMarket = Loadable({
  loader: () => import('../components/sidebar/SuperMarket'),
  loading: Loading,
});

const Orders = Loadable({
  loader: () => import('../components/sidebar/Ordedrs'),
  loading: Loading,
});

const Incomes = Loadable({
  loader: () => import('../components/sidebar/Incomes'),
  loading: Loading,
});

const Loses = Loadable({
  loader: () => import('../components/sidebar/Loses'),
  loading: Loading,
});

const Charts = Loadable({
  loader: () => import('../components/sidebar/Charts'),
  loading: Loading,
});



// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: App },
  { path: '/users', exact: true, name: 'Users' },
  { path: '/users/customers', name: 'Customers', component: Customers },
  { path: '/users/admins', name: 'Admins', component: Admins },
  { path: '/products', name: 'Products'},
  { path: '/products/proteins-market', name: 'Proteins-Market', component: ProteinMarket },
  { path: '/products/super-market', name: 'Super-Market', component: SuperMarket },
  { path: '/orders', name: 'orders', component: Orders },
  { path: '/costs', exact: true, name: 'Costs' },
  { path: '/costs/incomes', name: 'Incomes', component: Incomes },
  { path: '/costs/loses', name: 'Loses', component: Loses },
  { path: '/costs/charts', name: 'Charts', component: Charts },

];

export default routes;
