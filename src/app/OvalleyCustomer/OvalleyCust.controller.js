(function () {
  'use strict';

  angular
    .module('angularProject')
    .controller('ovalleyController', ovalleyController)
    .controller('paginationList', paginationList);

  /** @ngInject */
  function ovalleyController($timeout, $scope, $http, $rootScope, $location,$mdDialog, Appservice) {
    $scope.SearchFromJsonData = function () {


      //---------------------Side Navigation Menu-------------//

		$scope.myClass = "md-sidenav-left md-whiteframe-z2";
		$scope.option1 = "md-sidenav-opened md-whiteframe-z2";

		$scope.toggleFlag = true;

		$scope.edit = true;
		$scope.hoverEdit = false;
		$scope.size = "5";

		$scope.toggleClass = function () {
			if ($scope.myClass == "md-sidenav-left md-whiteframe-z2") {
				$scope.myClass = "md-sidenav-opened md-whiteframe-z2";
				$scope.toggleFlag = false;
				$scope.size = "25";
			}
			else {
				$scope.myClass = "md-sidenav-left md-whiteframe-z2";
				$scope.toggleFlag = true;
				$scope.size = "5";

			}
		}
		$scope.toggleSidenav = function (menuId) {
			$scope.hoverEdit = true;

		};

		$scope.hoverIn = function () {
			if ($scope.toggleFlag) {
				$scope.hoverEdit = true;
				$scope.edit = false;
			}
		};

		$scope.hoverOut = function () {
			if ($scope.toggleFlag) {
				$scope.hoverEdit = false;
				$scope.edit = true;
			}
		};

		//--------------------End Side Navigation Menu----------//











      // this.querySearch = function (query) {
      //   return $http.get("http://localhost:8080/Test/Customer", { params: { q: query } })
      //     .then(function (response) {
      //       return response.data.items;
      //     })
      // }

      var a = $scope.search.$;
      if (a.length > 1) {
        alert("inside if for getCustomer");
        //getCustomers();
        alert("inside aftr if getcustomer");

      }
    }


     getCustomers();


    $scope.col = false;
    $scope.showColumnTabv = false;
    $scope.showColumnTab = function () {
      $scope.showColumnTabv = !$scope.showColumnTabv;
    }
    $scope.column = [];
    $scope.showColumn = false;
    $scope.filterColumn = function () {
      //alert("ggggg");
      // if($scope.showColumn)
      // {
      // alert("nnnnnnmmm");
      if ($scope.showColumn == true) {
        //alert("lalalal");
        $scope.col = false;

      }
      else {
        $scope.col = true;
      }
      // }
      // $scope.col=false;
      $scope.showColumn = !$scope.showColumn;

      // alert("hh");
      for (var i = 0; i < $scope.terms.length; i++) {
        if ($scope.showColumn.selected == true) {
          // alert("hiiiinjjnj");
        }
      }

    }



    //---- method for get customers data -----

 
    function getCustomers() {

      // function getEmail()
      // {
      //   alert("Emaillsss");
      //   Appservice.getEmail().then(function(successResponse){
      //     $scope.emails=successResponse.data.ulist;
      //     console.log("emails inside appserve controller..."+angular.toJson($scope.emails));
      //   },function(errorResponse){
      //     //alert("error==="+errorResponse);
      //   });
      // }
      Appservice.getCustomers().then(function (successResponse) {
        alert("inside getcustomer appserviceee main controller");
        if (successResponse.data)
          $scope.msg = "Post Data Submitted Successfully!";
          alert("msggg=="+$scope.msg);

        $scope.list = successResponse.data.ulist;

        console.log($scope.list);
        getEmail($scope.list);

      }, function (errorResponse) {
        alert("error in main controller=>" + angular.toJson(errorResponse));
        $scope.msg = errorResponse.message;
        $scope.statusval = errorResponse.status;
      });

    }


$scope.displayEmail=function(data)
{
  $scope.id=data.cust_id;
  alert("jjjj=>"+$scope.id);
  $location.path("");
}
function getEmail(list)
      {
        $scope.emails=$scope.list.cust_id;
        alert("Emaillsss");
        console.log("custid email=="+angular.toJson($scope.emails));
        Appservice.getEmail().then(function(successResponse){
          $scope.emails=successResponse.data.ulist;
          console.log("emails inside appserve controller..."+angular.toJson($scope.emails));
        },function(errorResponse){
          //alert("error==="+errorResponse);
        });
      }


    //---jump to Insert customer
    $scope.addCustomer = function () {
      $location.path("/addCustomer");
    }
    //----method for Add multiple Contact,Email and Address---//
    $scope.addMultiple=function(data)
    {
      $rootScope.ID=data.cust_id;
      console.log("id for multiple ==>"+angular.toJson($rootScope.ID));
    //   $mdDialog.show({
    //   controller: DialogController,
    //   templateUrl: 'addMultiple.html',
    //   parent: angular.element(document.body),
    //   targetEvent: ev,
    //   clickOutsideToClose:true
    // })
    //     .then(function(answer) {
    //       $scope.status = 'You said the information was "' + answer + '".';
    //     }, function() {
    //       $scope.status = 'You cancelled the dialog.';
    //     });
      $location.path("/addMultiple");
    }
    //-----method for remove data
    $scope.deleteCustomer = function (data) {
      var ans = confirm("Do you want to Delete");
      if (ans == true) {
        alert("inside delete");
        var data ={ 
          'id':data.cust_id
        }
        console.log("id to delete in json-->"+angular.toJson(data));
        Appservice.deleteCustomer(data).then(function (successResponse) {
          getCustomers();
        }, function (errorResponse) {
          alert(errorResponse);
        });
      }
      else {
        getCustomers();
      }
    }
    //----remove data------

    //---- method to update data
    $scope.updateD = function (data) {
      alert("inside main controller");
      $rootScope.ID = data.cust_id;
      //console.log("street----->>", $rootScope.textbox14);
      $scope.datain = {
        'fName': data.fName,
        'lName': data.lName,
        'city': data.city,
        'cust_address': data.cust_address,
        'zone': data.zone,
        'active': data.active,
        'custType': data.custType,
        'email': data.email,
        'state': data.state,
        'shopType': data.shopType,
        'deliveyBoy': data.deliveyBoy,
        'contact': data.contact,
        'street': data.street
      }
      console.log("street----->>", angular.toJson($scope.datain));
      $rootScope.dataToUpdate = $scope.datain;
      console.log("inside main controller using $scope====>.--" + angular.toJson(data));
      $location.path("/updateCustomer");
    }


    //-------------multiple select checkbox---------Begin------//  
    $scope.a = 1;
    $scope.b = 2;
    $scope.multiselect = function (value) {
      $scope.checkedData = [];
      var count = 0;
      for (var i = 0; i < $scope.list.length; i++) {
        if ($scope.list[i].selected == true) {
          $scope.checkedData.push($scope.list[i].cust_id);
          $scope.hide = !$scope.isAllSelected;
          count++;
        }
      }
      $scope.kl = count;
      if ($scope.kl > 0) {
        alert("length of checkdbox-->" + $scope.kl);
        alert("id===>" + $scope.checkedData);
        $rootScope.dataForDelete = $scope.checkedData;
        alert("ids using $rootscope------>>>" + $rootScope.dataForDelete);
        $scope.idarr = {
          'id': $scope.checkedData
        }
        alert("ids in json as object==> " + $scope.idarr);
        alert("idssss in json as whole arr-->" + angular.toJson($scope.idarr));
      }
      else {
        alert("select atleast one");
      }
    }




    $rootScope.dataForDelete = [];
    $scope.deleteMultipleCustomers = function (value) {

      $scope.multiselect();

      alert("aftr calling function-->" + angular.toJson($scope.idarr));
      alert("ids using $rootscope------>>>" + angular.toJson($scope.checkedData));
      alert("legnth of select data...." + $scope.checkedData.length);

      $scope.deleteCustomers = {
        'id': $scope.checkedData
      }

      Appservice.deletMultpleCustomers($scope.deleteCustomers).then(function (successResponse) {
        alert("Inside Appservice in main controller");
        console.log("inside Appserve controller__>>" + angular.toJson($scope.deleteCustomers));
        getCustomers();
      }, function (errorResponse) {
        alert(errorResponse);
      });
      //   $scope.checkedData = [];  
      //  var count = 0;
      // for (var i = 0; i < $scope.list.length; i++) {
      //   if ($scope.list[i].selected == true) {
      //     $scope.checkedData.push($scope.list[i].cust_id);
      //     $scope.hide = !$scope.isAllSelected;
      //     count++;
      //   }
      // }
      // $scope.kl = count;
      // if ($scope.kl > 0) {
      //   alert("length of checkdbox-->" + $scope.kl);
      //   alert("id===>" + $scope.checkedData);
      //   $rootScope.dataForDelete = $scope.checkedData;
      //   alert("ids using $rootscope------>>>" + $rootScope.dataForDelete);
      // $scope.idarr = {
      //   'id': $scope.checkedData
      // }
      //   alert("ids in json as object==> " + $scope.idarr);
      //   alert("idssss in json as whole arr-->" + angular.toJson($scope.idarr));
      // }
      // else {
      //   alert("select atleast one");
      // }
    }



    $scope.test = false;
    $scope.isAllSelected = false;
    $scope.SelectAll = function () {
      if ($scope.isAllSelected == true) {
        $scope.test = true;
      } else {
        $scope.test = false;
      }
      var selectstatus = $scope.isAllSelected;
      console.log("selectAll--->" + selectstatus);
      console.log("status for hide and show___>" + $scope.hide);
      console.log($scope.list);
      angular.forEach($scope.list, function (selecteddata) {
        selecteddata.selected = selectstatus;
      });
    }
    $scope.selectcheckdata = [];
    $scope.test = false;

    $scope.selecteMultiple = function (data) {
      var count = 0;
      for (var i = 0; i < $scope.list.length; i++) {
        if ($scope.list[i].selected == true) {
          $scope.isAllSelected = false;
          count++;
        }
      }
      alert("count=" + count);
      alert("total length of data-->" + $scope.list.length);
      if (count == $scope.list.length) {
        $scope.isAllSelected = true;
      }
      if (count >= 0) {
        $scope.test = true;
      }
      else {
        $scope.test = false;
      }
      if (data.selected == true) {
        $scope.selectcheckdata.push(data.cust_id);
      }
      else {
        var position = $scope.selectcheckdata.indexOf(data.cust_id);
        $scope.selectcheckdata.splice(position, 1);
      }
    }
    //--------------------multiple select checkbox------End-----------------//


    //----------------------Multiple Column Select --checkbox--------------Begin-----------//

    $scope.multicol = {};   //create multicol object
    $scope.multicol.colCust1 = false;  //  push colCust1 into multicol object
    $scope.multicol.colCust2 = false;     //  push colCust2 into multicol object
    $scope.multicol.colCust3 = false;     //  push colCust3 into multicol object
    $scope.multicol.colCust4 = false;     //  push colCust4 into multicol object
    $scope.multicol.colCust5 = false;     //  push colCust5 into multicol object
    $scope.ShowcolCust1 = true;
    $scope.ShowcolCust2 = true;
    $scope.ShowcolCust3 = true;
    $scope.ShowcolCust4 = true;
    $scope.ShowcolCust5 = true;
    $scope.multiplecolselect = true;
    $scope.multipleColumnsSelected = [];
    $scope.multipleColSelect = function () {
      $scope.ShowcolCust1 = false;
      $scope.ShowcolCust2 = false;
      $scope.ShowcolCust3 = false;
      $scope.ShowcolCust4 = false;
      $scope.ShowcolCust5 = false;


      if ($scope.multicol.colCust1 == true) {
        $scope.ShowcolCust1 = true;
        $scope.multiplecolselect = false;
      } else {
        $scope.ShowcolCust1 = false;
      }
      if ($scope.multicol.colCust2 == true) {
        $scope.ShowcolCust2 = true;
        $scope.multiplecolselect = false
      } else {
        $scope.ShowcolCust2 = false;
      }
      if ($scope.multicol.colCust3 == true) {
        $scope.ShowcolCust3 = true;
        $scope.multiplecolselect = false
      } else {
        $scope.ShowcolCust3 = false;
      }
      if ($scope.multicol.colCust4 == true) {
        $scope.ShowcolCust4 = true;
        $scope.multiplecolselect = false
      } else {
        $scope.ShowcolCust4 = false;
      }
      if ($scope.multicol.colCust5 == true) {
        $scope.ShowcolCust5 = true;
        $scope.multiplecolselect = false
      } else {
        $scope.ShowcolCust5 = false;
      }

    }
    //----------------------Multiple Column Select --checkbox--------------END-----------//






    //   $scope.changeFilter = function(q){
    //    $scope.filter = q;
    // }

    $scope.propertyName = '';
    $scope.reverse = false;
    $scope.sortBy = function (propertyName) {
      $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
    };
    $scope.terms = [{ 'type': 'fName', 'Contact': 'Customer Name' },
    { 'type': 'contact', 'Contact': 'Contact' },
    { 'type': 'cust_id', 'Contact': 'ID' },
    { 'type': 'zone', 'Contact': 'Zipcode' }]
    alert("enbhb" + $scope.terms.length);
    $scope.resetall = function () {
      $scope.search = {};
    }
    $scope.filtershow = false;
    $scope.currentPage = 0;
    $scope.paging = {
      total: 100,
      current: 1,
      onPageChanged: loadPages,
    };
    function loadPages() {
      console.log('Current page is : ' + $scope.paging.current);
      $scope.currentPage = $scope.paging.current;
    }



    //-----------------for sort columns -----------------------//
    // column to sort
    $scope.column = '';

    // sort ordering (Ascending or Descending). Set true for desending
    $scope.reverse = false;

    // called on header click
    $scope.sortColumn = function (col) {
      $scope.column = col;
      if ($scope.reverse) {
        $scope.reverse = false;
        $scope.reverseclass = 'arrow-up';
      } else {
        $scope.reverse = true;
        $scope.reverseclass = 'arrow-down';
      }
    };

    // remove and change class
    $scope.sortClass = function (col) {
      if ($scope.column == col) {
        if ($scope.reverse) {
          return 'arrow-down';
        } else {
          return 'arrow-up';
        }
      } else {
        return '';
      }
    }


    //-----------------------for pagination ------------------//

    $scope.currentPage = 1;
    $scope.pageSize = 10;

    $scope.pageChangeHandler = function (num) {
      console.log('customer page changed to ' + num);
    }
  }


  /***paginationList controller */
  function paginationList($scope) {
    alert("pagination");

  }

// function DialogController($scope, $mdDialog) {
//     $scope.hide = function() {
//       $mdDialog.hide();
//     };

//     $scope.cancel = function() {
//       $mdDialog.cancel();
//     };

//     $scope.answer = function(answer) {
//       $mdDialog.hide(answer);
//     };
//   }









})();
