(function () {
    'use strict';

    angular
        .module('angularProject')
        .controller('OvalleyUpdateCustomerController', OvalleyUpdateCustomerController)


    function OvalleyUpdateCustomerController($timeout, $scope, $http, $rootScope, $location,Appservice) {

        $scope.datai = $rootScope.dataToUpdate;
		console.log("updaatattatat=>>>"+angular.toJson($rootScope.dataToUpdate));
		console.log("up datai=>>>"+angular.toJson($scope.datai));


		//---- Method For Update Customers

        $scope.updateCustomer = function (datai) 
        {
            alert("inside update customersssss....");
			console.log("inside updateCustomer method=>>>"+angular.toJson($scope.datai));
            $scope.customerUpdateData =
			{
				'id':$scope.ID,
				'fname':datai.fName,
				'lName':datai.lName,
				'city':datai.city,
				'cust_address':datai.cust_address,
				'zone':datai.zone,
				'active':datai.active,
				'custType':datai.custType,
				'email':datai.email,
				'state':datai.state,
				'shopType':datai.shopType,
				'deliveyBoy':datai.deliveyBoy,
				'contact' :datai.contact,
				'street':datai.street	 
			}

			console.log("id---____>>~"+$scope.ID);
			console.log("customerUpdateData ////"+angular.toJson($scope.customerUpdateData));

			$scope.updatecustomers=$scope.customerUpdateData;
       		console.log("inside updateCustomers value put into $scope =>>>"+angular.toJson($scope.updatecustomers));
            Appservice.updateCustomer($scope.updatecustomers).then(function(successResponse) {

				alert("inside updatecontroller appservice ");
				$location.path("/");
			console.log("inside updateCustomers  Appservice  ----$scope =>>>"+angular.toJson($scope.updatecustomers));
			}, function(errorResponse) {
				alert("error in update customer=>"+errorResponse);
			});
        }
    }
})();