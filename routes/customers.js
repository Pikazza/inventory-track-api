
const customerController = require('../controllers/customers');


module.exports = function(router){

  router.get('/customers', customerController.getAll);

  router.get('/customers/:customerId', customerController.getCustomerById);

  router.post('/customers', customerController.createCustomer);

  router.put('/customers/:customerId', customerController.updateCustomer);

  router.post('/customers/signIn', customerController.signIn);

  router.get('/customers/:customerId/products', customerController.getCustomerProducts);

//   router.get('/customers', function(req, res, next) {
//   res.send('respond with a resource');
//  });

}


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
  