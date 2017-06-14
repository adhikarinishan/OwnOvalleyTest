(function () {
    'use strict';
    angular.module('angularProject')
        .service('Appservice', Appservice);

    function Appservice($http) {
        this.getCustomers = getCustomers;
        this.getEmail=getEmail;
        this.deleteCustomer=deleteCustomer;
        this.deletMultpleCustomers=deletMultpleCustomers;
        this.insertCustomer=insertCustomer;
        this.updateCustomer=updateCustomer;
        this.addMultipleContacts=addMultipleContacts;
        this.addMultipleEmails=addMultipleEmails;
        this.addMultipleAddressess=addMultipleAddressess;
        function getCustomers() {
            alert("inside getCustomer Apservice.....");
            return $http({
                method: 'GET',
                url:'http://localhost:8080/Test/Customer'
            });
        }

        function getEmail()
        {
            alert("inside email Appservice");
            return $http({
                method:'GET',
                url:'http://localhost:8080/Test/email'
            });
        }

        function deleteCustomer(data)
        {
            console.log("post data",angular.toJson(data));
              return $http({
                method:'POST',
                url:'http://localhost:8080/Test/deleteCustomer',
                data:data
            });
            //console.log("post header",jsonInput);

            //return $http(jsonInput);
        }

        
        function insertCustomer(customerData)
        {
            alert("Inside Insert Data....");
           console.log(customerData);
            return $http({
				method : 'POST',
				url:'http://localhost:8080/Test/insertcustomer',
                data:customerData
			});
        }


        function updateCustomer(updatecustomers)
        {
             alert("inside update Appservice---service..");
            
           console.log("data updated---->"+angular.toJson(updatecustomers));
            return $http({
				method : 'POST',
				url : 'http://localhost:8080/Test/update',
				data : updatecustomers
			});
        }



        function deletMultpleCustomers(deleteCustomers)
        {
            alert("under apservice.js");
            alert("jaaam==="+angular.toJson(deleteCustomers));
            //console.log("inside appservise for multi delete__"+angular.toJson(emptyarr));
            return $http({
                method:'POST',
                url:'http://localhost:8080/Test/deletemulcustomer',
                data:deleteCustomers
            })
        }

        function addMultipleContacts(mulContacts)
        {
            alert("inside addmultiple appservice");
            console.log("passContact inside Appservice->" + angular.toJson(mulContacts));
            return $http({
                method:'POST',
	            url:'http://localhost:8080/Test/phone',
	            data:mulContacts
            })
        }

        function addMultipleEmails(mulEmails)
        {
            alert("inside addmultiple emails Appservice... ");
            return $http({
                method:'POST',
                url:'http://localhost:8080/Test/email',
                data:mulEmails
            })
        }
        function addMultipleAddressess(mulAddress)
        {
            alert("inside addmultiple Addressess Appservice...");
                  console.log("Json address inside appservice-->" + angular.toJson(mulAddress));
                  return $http({
                      method:'POST',
                      url:'http://localhost:8080/Test/address'
                  })
      
        }

    }
})()