export default {
  items: [
    {
      name: 'ONLINE NARMAK',
      url: '/dashboard',
      icon: 'fa fa-opencart',
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
      url: '/users',
      icon: 'fa fa-users',
      children: [
        {
          name: 'admins',
          url: '/users/admins',
          icon: 'fa fa-user-circle',
        },
        {
          name: 'customers',
          url: '/users/customers',
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
      url: '/products',
      icon: 'fa fa-shopping-basket',
      children: [
        {
          name: 'proteins market',
          url: '/products/proteins-market',
          icon: 'fa fa-shopping-bag',
        },
        {
          name: 'super market',
          url: '/products/super-market',
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
      url: '/orders',
      icon: 'fa fa-tasks',
      badge:{
        variant:'info',
        text:5
      }
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
      url: '/costs',
      icon: 'fa fa-bank',
      children: [
        {
          name: 'incomes',
          url: '/costs/incomes',
          icon: 'fa fa-money',
        },
        {
          name: 'loses',
          url: '/costs/loses',
          icon: 'fa fa-ban',
        },
        {
          name: 'charts',
          url: '/costs/charts',
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
      url: 'https://t.me/MYMusicMOJI1373',
      icon: 'fa fa-telegram',
      class: 'mt-auto',
      variant: 'primary',
      attributes: { target: '_blank', rel: 'noopener' },
    },

    {
      name: 'Instagram Page',
      url: 'https://www.instagram.com/?hl=en',
      icon: 'fa fa-instagram',
      variant: 'danger',
      attributes: { target: '_blank', rel: 'noopener' },
    },
  ],
}
