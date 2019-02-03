import React from 'react';
import Loadable from 'react-loadable'

import App from './../App';


function Loading() {
  return <div>Loading...</div>;
}

const Admins = Loadable({
  loader: () => import('../components/sidebar/users/Admins'),
  loading: Loading,
});

const Customers = Loadable({
  loader: () => import('../components/sidebar/users/Customers'),
  loading: Loading,
});

const Customer = Loadable({
  loader: () => import('../components/sidebar/users/Customer'),
  loading: Loading,
});

const ProteinMarket = Loadable({
  loader: () => import('../components/sidebar/products/ProteinMarket'),
  loading: Loading,
});

const SuperMarket = Loadable({
  loader: () => import('../components/sidebar/products/SuperMarket'),
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

const Admin = Loadable({
  loader: () => import('../components/sidebar/users/Admin'),
  loading: Loading,
});

const pmProduct = Loadable({
  loader: () => import('../components/sidebar/products/pmProduct'),
  loading: Loading,
});

const smProduct = Loadable({
  loader: () => import('../components/sidebar/products/smProduct'),
  loading: Loading,
});


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: App },
  { path: '/users', exact: true, name: 'Users' },
  { path: '/users/customers',exact:true, name: 'Customers', component: Customers },
  { path: '/users/customers/:id',exact:true, name: 'Customer-Details', component: Customer },
  { path: '/users/admins', name: 'Admins', component: Admins },
  { path: '/users/admins/admin', name: 'Admins', component: Admin },
  { path: '/products',exact:true, name: 'Products'},
  { path: '/products/proteins-market',exact:true, name: 'Proteins-Market', component: ProteinMarket },
  { path: '/products/proteins-market/:id', name: 'P-M product', component: pmProduct },
  { path: '/products/super-market', name: 'Super-Market', component: SuperMarket },
  { path: '/products/super-market/:id', name: 'S-M product', component: smProduct },
  { path: '/orders', name: 'orders', component: Orders },
  { path: '/costs', exact: true, name: 'Costs' },
  { path: '/costs/incomes', name: 'Incomes', component: Incomes },
  { path: '/costs/loses', name: 'Loses', component: Loses },
  { path: '/costs/charts', name: 'Charts', component: Charts },

];

export default routes;
