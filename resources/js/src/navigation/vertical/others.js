export default [
  {
    header: 'Others',
  },
  {
    title: 'Access Control',
    route: 'access-control',
    icon: 'ShieldIcon',
    // acl: {
    action: 'read',
    resource: 'ACL',
    // },
  },
  {
    title: 'Menu Levels',
    icon: 'MenuIcon',
    children: [
      {
        title: 'Menu Level 2.1',
        route: null,
      },
      {
        title: 'Menu Level 2.2',
        children: [
          {
            title: 'Menu Level 3.1',
            route: null,
          },
          {
            title: 'Menu Level 3.2',
            route: null,
          },
        ],
      },
    ],
  },
]
