export default {
  routes: [
    {
      method: 'GET',
      path: '/landing/:page',
      handler: 'landing.findByPage',
      config: {
        auth: false, // Assuming you want this to be a public route
      },
    },
    {
      method: 'GET',
      path: '/landings',
      handler: 'landing.find',
    },
    {
      method: 'GET',
      path: '/landings/:id',
      handler: 'landing.findOne',
    },
    {
      method: 'POST',
      path: '/landings',
      handler: 'landing.create',
    },
    {
      method: 'PUT',
      path: '/landings/:id',
      handler: 'landing.update',
    },
    {
      method: 'DELETE',
      path: '/landings/:id',
      handler: 'landing.delete',
    },
  ],
};
