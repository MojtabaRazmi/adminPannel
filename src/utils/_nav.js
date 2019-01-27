export default {
  items: [
    {
      name: 'ONLINE NARMAK',
      url: '/dashboard',
      icon: 'fda fa-opencart',
      // badge: {
      //   variant: 'info',
      //   text: 'NEW',
      // },
    },
    {
      title: true,
      name: 'users',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'users',
      url: '/base',
      icon: 'fa fa-users',
      children: [
        {
          name: 'admins',
          url: '/base/breadcrumbs',
          icon: 'fa fa-user-circle',
        },
        {
          name: 'customers',
          url: '/base/cards',
          icon: 'fa fa-user',
        }]
    },
    {
      title: true,
      name: 'store',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'products',
      url: '/theme/colors',
      icon: 'fa fa-shopping-basket',
      children: [
        {
          name: 'proteins market',
          url: '/base/breadcrumbs',
          icon: 'fa fa-shopping-bag',
        },
        {
          name: 'super market',
          url: '/base/cards',
          icon: 'fa fa-shopping-cart',
        }]
    },

    {
      title: true,
      name: 'orders',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'orders',
      url: '/base',
      icon: 'fa fa-tasks'
    },
    {
      title: true,
      name: 'costs & benefits',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'cost & benefit',
      url: '/base',
      icon: 'fa fa-bank',
      children: [
        {
          name: 'incomes',
          url: '/base/breadcrumbs',
          icon: 'fa fa-money',
        },
        {
          name: 'loses',
          url: '/base/cards',
          icon: 'fa fa-ban',
        },
        {
          name: 'charts',
          url: '/base/cards',
          icon: 'fa fa-line-chart',
        }
      ]

    },
    // {
    //   name: 'Disabled',
    //   url: '/dashboard',
    //   icon: 'icon-ban',
    //   attributes: { disabled: true },
    // },
    {
      name: 'Telegram Channel',
      url: 'https://coreui.io/react/',
      icon: 'fa fa-telegram',
      class: 'mt-auto',
      variant: 'primary',
      attributes: { target: '_blank', rel: 'noopener' },
    },

    {
      name: 'Instagram Page',
      url: 'https://coreui.io/pro/react/',
      icon: 'fa fa-instagram',
      variant: 'info',
      attributes: { target: '_blank', rel: 'noopener' },
    },
  ],
}
