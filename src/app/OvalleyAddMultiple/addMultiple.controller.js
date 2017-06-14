(function () {
    'use strict';

    angular
        .module('angularProject')
        .controller('OvalleyAddMultipleController', OvalleyAddMultipleController)


    function OvalleyAddMultipleController($scope, $timeout, $location, $rootScope, Appservice) {


        //console.log("id for multiple inside multiple add controller==>"+angular.toJson($scope.ID));

        //------------------------- for Multiple Contacts--------------------------//
        $scope.multiplecontact = [{}];
        $scope.addMultipleContact = function () {
            $scope.SaveContact();
            $scope.multiplecontact.push({});
            console.log("length of multiplecontact==>>" + $scope.multiplecontact.length);
            console.log("contacs save...." + angular.toJson($scope.save));
            console.log("contacss...." + angular.toJson($scope.multiplecontact));
            
        }
        console.log("aftr function length of multiplecontact==>>" + $scope.multiplecontact.length);

        $scope.removeContact = function (item) {
            $scope.multiplecontact.splice(item, 1);
        }

        $scope.contact;
        $scope.con;
        $scope.mulcontact = [];

        $scope.SaveContact = function () {
            alert("hiii");
            for (var i = 0; i < $scope.multiplecontact.length; i++) {
                var a = $scope.multiplecontact[i].contact;
                console.log(a);
                $scope.mulcontact.push(a);
            }
            console.log("passContact->" + angular.toJson($scope.mulcontact));
            $scope.mulContacts = {
                'cust_id': $scope.ID,
                'contact': $scope.mulcontact
            }
            console.log("json data->" + angular.toJson($scope.mulContacts));

            Appservice.addMultipleContacts($scope.mulContacts).then(function (successResponse) {
                alert("inside add multiple controller appservice");
            }, function (errorResponse) {

            });
        }


        //------------------------Multiple Emails----------------------------//
        $scope.multipleEmails = [{}];
        $scope.mulEmails;
        $scope.addMultipleEmail = function () {
            alert("ooo");
            $scope.multipleEmails.push({});
        }
        $scope.removeEmail = function (indx) {
            $scope.multipleEmails.splice(indx, 1);
        }
        $scope.mulEmail = [];
        $scope.saveEmail = function () {
            alert("email");
            for (var i = 0; i < $scope.multipleEmails.length; i++) {
                var em = $scope.multipleEmails[i].email;
                $scope.mulEmail.push(em);
            }
            console.log("email-->" + angular.toJson($scope.mulEmail));

            $scope.mulEmails = {
                'cust_id': $scope.ID,
                'email': $scope.mulEmail
            }

            console.log("Json email-->" + angular.toJson($scope.mulEmails));

            Appservice.addMultipleEmails($scope.mulEmails).then(function(successResponse)
            {
                alert("inside addMultipleEmails appservice controller");
            },function(errorResponse){}
            );

        }


        //-----------------------For MUltiple Address --------------------------//

        $scope.addressCount = 0;
        $scope.multipleAddress = [{}];
        $scope.multiShopNo=[];
        $scope.multiBuildingName=[];
        $scope.multistreet = [];
        $scope.multiArea=[];
        $scope.multiPincode=[];
        $scope.multiCity=[];
        $scope.multiState=[];
        $scope.mulAddress;
        $scope.addMultipleAddress = function () {
            $scope.multipleAddress.push({});
            $scope.addressCount++;
            $scope.saveAddress();
        }
        $scope.removeAddress = function (addrindex) {
            $scope.multipleAddress.splice(addrindex, 1);
        }
        $scope.saveAddress = function () {
            for (var i = 0; i < $scope.multipleAddress.length; i++)
             {
                var shopno=$scope.multipleAddress[i].shopNo;
                var buildingname=$scope.multipleAddress[i].buildingName;
                var street = $scope.multipleAddress[i].Street;
                var Area=$scope.multipleAddress[i].Area;
                var pincode=$scope.multipleAddress[i].Pincode;
                var City=$scope.multipleAddress[i].City;
                var State=$scope.multipleAddress[i].State;

                $scope.multiShopNo.push(shopno);
                $scope.multiBuildingName.push(buildingname);
                $scope.multistreet.push(street);
                $scope.multiArea.push(Area);
                $scope.multiPincode.push(pincode);
                $scope.multiCity.push(City);
                $scope.multiState.push(State);
            }
            console.log("street-->" + angular.toJson($scope.multistreet));
            $scope.mulAddress = {
                'cust_id': $scope.ID,
                'shopNo':$scope.multiShopNo,
                'buildingName':$scope.multiBuildingName,
                'street': $scope.multistreet,
                'area':$scope.multiArea,
                'zone':$scope.multiPincode,
                'city':$scope.multiCity,
                'state':$scope.multiState
            }
            console.log("Json address-->" + angular.toJson($scope.mulAddress));


            Appservice.addMultipleAddressess($scope.mulAddress).then(function(successResponse)
            {
                alert("inside addMultipleAddress appservice controller");
            })

        }








    }
})();