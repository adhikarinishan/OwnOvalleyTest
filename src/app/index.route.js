(function() {
  'use strict';

  angular
    .module('angularProject')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/addCustomer', {
        templateUrl: 'app/InsertCustomers/OvalleyInsertCustomer.html',
        controller: 'OvalleyInsertCustomerController'
      })
      .when('/', {
        templateUrl: 'app/OvalleyCustomer/OvalleyCust.html',
        controller: 'ovalleyController'
      })
      .when('/updateCustomer',{
          templateUrl: 'app/UpdateCustomers/OvalleyUpdateCustomers.html',
           controller: 'OvalleyUpdateCustomerController'
      })
      .when('/addMultiple',{
          templateUrl:'app/OvalleyAddMultiple/addMultiple.html',
          controller:'OvalleyAddMultipleController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
