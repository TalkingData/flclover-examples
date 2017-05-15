module.exports = (router, controller) => {
  router.get('/list', controller.home.list);
};
