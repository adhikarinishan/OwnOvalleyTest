(function () {
	'use strict';

	angular
		.module('angularProject')
		.controller('OvalleyInsertCustomerController', OvalleyInsertCustomerController)
		.controller('GreetingController', GreetingController)
		.config(function ($mdThemingProvider) {
			// Update the theme colors to use themes on font-icons
			$mdThemingProvider.theme('default')
				.definePalette('pink')
				.primaryPalette('blue')
				.accentPalette('pink')
				.warnPalette('red');
		});

	function OvalleyInsertCustomerController($scope, $timeout, $q, $log, $rootScope, $location, $mdDialog, geolocation, Appservice) {


		//-------------------Geolocation -------------Begin------------//
		$scope.latitude="";
		$scope.longitude="";
		function showResult(result) {
			//document.getElementById('latitude').value = result.geometry.location.lat();
			//document.getElementById('longitude').value = result.geometry.location.lng();
			$scope.latitude=result.geometry.location.lat();
			$scope.longitude=result.geometry.location.lng();
			console.log("longitude-->"+$scope.longitude);
			console.log("latitude--->"+$scope.latitude);
		}
		$scope.address1="";
		function getLatitudeLongitude(callback, address) {
			// If adress is not supplied, use default value 'Ferrol, Galicia, Spain'
			//address = address;// || '';
			// Initialize the Geocoder

			console.log("pin=="+address);
			$scope.address1=address.toString();;
			console.log("address1==-->>"+angular.toJson($scope.address1));
			var geocoder = new google.maps.Geocoder();
			if (geocoder) {
				geocoder.geocode({
					'address': $scope.address1
				}, function (results, status) {
					if (status == google.maps.GeocoderStatus.OK) {
						callback(results[0]);
					}
				});
				//console.log("pin inside if==>"+pincode);
			}
		}
		$scope.pincode='';
		$scope.address=[];		
		//var button = angular.element('#btn');
		$scope.addEventListener = function () {
			alert("address : "+$scope.address);
			$scope.address.push($scope.pincode);
			console.log("addrss....with pin n city:---"+angular.toJson($scope.address));
			getLatitudeLongitude(showResult, $scope.address)
		};
		//-----------------------Geolocation -----------End-------------//


		//------------to jump to home page------//

		$scope.jumpTomainPage = function () {
			alert("home");
			$location.path("/");
		}



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



		//-------------------------Opening Days-------------
		$scope.DaysOfWeek = [
			{ category: 'day', name: 'Sunday' },
			{ category: 'day', name: 'Monday' },
			{ category: 'day', name: 'Tuesday' },
			{ category: 'day', name: 'Wednesday' },
			{ category: 'day', name: 'Thursday' },
			{ category: 'day', name: 'Friday' },
			{ category: 'day', name: 'Saturday' }
		];
		$scope.selectedDays = [];
		$scope.printSelectedDays = function printSelectedDays() {
			var numberOfDays = this.selectedDays.length;
			if (numberOfDays > 1) {
				var needsOxfordComma = numberOfDays > 2;
				var lastDayConjunction = (needsOxfordComma ? ',' : '') + ' and ';
				var lastDay = lastDayConjunction +
					this.selectedDays[this.selectedDays.length - 1];
				return this.selectedDays.slice(0, -1).join(', ') + lastDay;
			}

			return this.selectedDays.join('');
		};
		//------------------------Opening days End--------------//

		//------------------------For dropdown Title-----//
		$scope.dropdownTitle = ['Mr', 'Mrs', 'Miss', 'Ms'];
		$scope.selectTitle;
		$scope.getSelectedTitle = function () {
			if ($scope.selectTitle !== undefined) {
				return $scope.selectTitle;
			} else {
				return "Select  a  Title";
			}
		}
		//----------------------Dropdown End-----------
		//-------------Dropdown for Air-condition------//
		$scope.dropdownAC = ['Yes', 'NO'];
		$scope.selectAC;
		$scope.getSelectedAC = function () {
			if ($scope.selectAC !== undefined) {
				return $scope.selectAC;
			} else {
				return "AC Available";
			}
		}
		//--------------End Of Ait condition dropdown---//

		//---------------Dropdown for  Class(e.g A,B,C)----//

		$scope.dropdownClass = ['A', 'B', 'C', 'D', 'E'];
		$scope.selectClass;
		$scope.getSelectedClass = function () {
			if ($scope.selectClass !== undefined) {
				alert("select");
				return $scope.selectClass;
			} else {
				return "Select a Class";
			}
		}
		//----------------End Of Class-----------------------//
		//---------------Dropdown for D-----DeliveryBoy --Begin ---//
		$scope.dropdownDeliveryBoy = ['Ram', 'Suraj', 'Johny', 'Altaf'];
		$scope.selectDeliveryBoy;
		$scope.getSelectedDeliveryBoy = function () {
			if ($scope.selectDeliveryBoy != undefined) {
				return $scope.selectDeliveryBoy;
			}
			else {
				return "Delivery Boy";
			}
		}
		//----------------DeliveryBoy Dropdown--- End--//

		//---------------Dropdown for Salepersonid-----Begin----//
		$scope.dropdownSaleperson = ['S1209', 'S897', 'S6767', 'S554'];
		$scope.selectSaleperson;
		$scope.getSelectedSaleperson = function () {
			if ($scope.selectSaleperson != undefined) {
				return $scope.selectSaleperson;
			}
			else {
				return "Sales Person";
			}
		}
		//----------------Salepersonid Dropdown--- End--//

		//------------------for date time------------//
		$scope.ClosingTime = new Date();
		$scope.OpeningTime = new Date();
		this.showTimePicker = function (ev) {
			$mdpTimePicker($scope.currentTime, {
				targetEvent: ev
			}).then(function (selectedDate) {
				$scope.currentTime = selectedDate;
			});;
		}

		//-------------------for add New Details----//
		$scope.showDetails1 = false;
		$scope.addNewDetails1 = function () {
			$scope.showDetails1 = true;
			alert("hiii");
		}
		$scope.showDetails2 = false;
		$scope.addNewDetails2 = function () {
			$scope.showDetails2 = true;
		}
		//--------------- End -------------------//


		//--------------------For Autocomplete---------- Begin --------//




		//--------------for autocomplete Street-----Begin----------




		$scope.simulateQuery = false;
		$scope.isDisabled = false;

		$scope.reposstreet = loadAllStreet();
		$scope.querySearchStreet = querySearchStreet;
		$scope.selectedItemChangeStreet = selectedItemChangeStreet;
		$scope.searchTextChangeStreet = searchTextChangeStreet;


		function querySearchStreet(query) {
			var results = query ? $scope.reposstreet.filter(createFilterForStreet(query)) : $scope.reposstreet,
				deferred;
			if ($scope.simulateQuery) {
				deferred = $q.defer();
				$timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
				return deferred.promise;
			} else {
				return results;
			}
		}

		function searchTextChangeStreet(text) {
			$log.info('Text changed to ' + text);
		}

		function selectedItemChangeStreet(item) {
			$log.info('Item changed to ' + JSON.stringify(item));
		}

		/**
		 * Build `components` list of key/value pairs
		 */
		function loadAllStreet() {
			var reposStreet = [
				{

					'Street': 'Link Road'
				},
				{

					'Street': 'MG Road'
				},
				{
					'Street': 'LBS Marg'
				}
			];
			return reposStreet.map(function (repostreets) {
				repostreets.value = repostreets.Street.toLowerCase();
				return repostreets;
			});
		}

		/**
		 * Create filter function for a query string
		 */
		function createFilterForStreet(query) {
			var lowercaseQueryStreet = angular.lowercase(query);

			return function filterFn(item) {
				return (item.value.indexOf(lowercaseQueryStreet) === 0);
			};

		}
		//--------------for autocomplete Street-----End----------//


		//--------------for autocomplete Area-----Begin----------




		//$scope.simulateQuery = false;
		//$scope.isDisabled = false;

		$scope.reposarea = loadAllArea();
		$scope.querySearchArea = querySearchArea;
		$scope.selectedItemChangeArea = selectedItemChangeArea;
		$scope.searchTextChangeArea = searchTextChangeArea;


		function querySearchArea(query) {
			var results = query ? $scope.reposarea.filter(createFilterForStreet(query)) : $scope.reposarea,
				deferred;
			if ($scope.simulateQuery) {
				deferred = $q.defer();
				$timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
				return deferred.promise;
			} else {
				return results;
			}
		}

		function searchTextChangeArea(text) {
			$log.info('Text changed to ' + text);
		}

		function selectedItemChangeArea(item) {
			$log.info('Item changed to ' + JSON.stringify(item));
		}

		/**
		 * Build `components` list of key/value pairs
		 */
		function loadAllArea() {
			var reposArea = [
				{

					'Area': 'Amarnagar'
				},
				{

					'Area': 'Khindipada'
				},
				{
					'Area': 'Colony'
				},
				{
					'Area': 'Hadapsar'
				}
			];
			return reposArea.map(function (repoareas) {
				repoareas.value = repoareas.Area.toLowerCase();
				return repoareas;
			});
		}

		/**
		 * Create filter function for a query string
		 */
		function createFilterForArea(query) {
			var lowercaseQueryArea = angular.lowercase(query);

			return function filterFn(item) {
				return (item.value.indexOf(lowercaseQueryArea) === 0);
			};

		}
		//--------------for autocomplete Street-----End----------//


		//--------------for autocomplete Region-----Begin----------


		//var $scope = this;

		//$scope.simulateQuery = false;
		//$scope.isDisabled = false;

		$scope.reposregion = loadAllRegion();
		$scope.querySearchRegion = querySearchRegion;
		$scope.selectedItemChangeRegion = selectedItemChangeRegion;
		$scope.searchTextChangeRegion = searchTextChangeRegion;


		function querySearchRegion(query) {
			var results = query ? $scope.reposregion.filter(createFilterForStreet(query)) : $scope.reposregion,
				deferred;
			if ($scope.simulateQuery) {
				deferred = $q.defer();
				$timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
				return deferred.promise;
			} else {
				return results;
			}
		}

		function searchTextChangeRegion(text) {
			$log.info('Text changed to ' + text);
		}

		function selectedItemChangeRegion(item) {
			$log.info('Item changed to ' + JSON.stringify(item));
		}

		/**
		 * Build `components` list of key/value pairs
		 */
		function loadAllRegion() {
			var reposRegion = [
				{

					'Region': 'East'
				},
				{

					'Region': 'West'
				},
				{
					'Region': 'North'
				},
				{
					'Region': 'South'
				},
				{
					'Region': 'North-East'
				},
				{
					'Region': 'North-West'
				},
				{
					'Region': 'South-West'
				},
				{
					'Region': 'South-East'
				}
			];
			return reposRegion.map(function (reporegions) {
				reporegions.value = reporegions.Region.toLowerCase();
				return reporegions;
			});
		}

		/**
		 * Create filter function for a query string
		 */
		function createFilterForRegion(query) {
			var lowercaseQueryRegion = angular.lowercase(query);

			return function filterFn(item) {
				return (item.value.indexOf(lowercaseQueryRegion) === 0);
			};

		}
		//--------------for autocomplete Region-----End----------//

		//--------------for autocomplete Zone-----Begin----------


		//var $scope = this;

		//$scope.simulateQuery = false;
		//$scope.isDisabled = false;

		$scope.reposzone = loadAllZone();
		$scope.querySearchZone = querySearchZone;
		$scope.selectedItemChangeZone = selectedItemChangeZone;
		$scope.searchTextChangeZone = searchTextChangeZone;


		function querySearchZone(query) {
			var results = query ? $scope.reposzone.filter(createFilterForZone(query)) : $scope.reposzone,
				deferred;
			if ($scope.simulateQuery) {
				deferred = $q.defer();
				$timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
				return deferred.promise;
			} else {
				return results;
			}
		}

		function searchTextChangeZone(text) {
			$log.info('Text changed to ' + text);
		}

		function selectedItemChangeZone(item) {
			$log.info('Item changed to ' + JSON.stringify(item));
		}

		/**
		 * Build `components` list of key/value pairs
		 */
		function loadAllZone() {
			var reposZone = [
				{

					'Zone': 'Mulund'
				},
				{

					'Zone': 'Bhandup'
				},
				{
					'Zone': 'Thane'
				},
				{
					'Zone': 'Dadar'
				},
				{
					'Zone': 'Nahur'
				}
			];
			return reposZone.map(function (repozones) {
				repozones.value = repozones.Zone.toLowerCase();
				return repozones;
			});
		}

		/**
		 * Create filter function for a query string
		 */
		function createFilterForZone(query) {
			var lowercaseQueryZone = angular.lowercase(query);

			return function filterFn(item) {
				return (item.value.indexOf(lowercaseQueryZone) === 0);
			};

		}
		//--------------for autocomplete Zone-----End----------//




		//--------------for autocomplete city-----Begin----------


		//var $scope = this;

		//$scope.simulateQuery = false;
		//$scope.isDisabled = false;

		$scope.reposcity = loadAllCity();
		$scope.querySearchCity = querySearchCity;
		$scope.selectedItemChangeCity = selectedItemChangeCity;
		$scope.searchTextChangeCity = searchTextChangeCity;


		function querySearchCity(query) {
			var results = query ? $scope.reposcity.filter(createFilterForCity(query)) : $scope.reposcity,
				deferred;
			if ($scope.simulateQuery) {
				deferred = $q.defer();
				$timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
				return deferred.promise;
			} else {
				return results;
			}
		}

		function searchTextChangeCity(text) {
			$log.info('Text changed to ' + text);
		}
		$scope.cityshow;
		//$scope.itemCity.city;
		function selectedItemChangeCity(item) {
			$log.info('Item changed to ' + JSON.stringify(item));
			$scope.cityshow=item.city;
			console.log("city show===>>"+angular.toJson($scope.cityshow));
			// $scope.address.push(item.city);
			//$scope.address.push($scope.pincode);
			//console.log("address for search==>>"+angular.toJson($scope.address));
		//	console.log("cityy..."+angular.log($scope.itemCity.city));	
		$scope.address.push($scope.cityshow);
	}
	

		/**
		 * Build `components` list of key/value pairs
		 */
		function loadAllCity() {
			var reposCity = [
				{
					'city': 'Mumbai'
				},
				{
					'city': 'Pune'
				}
			];
			return reposCity.map(function (repocity) {
				repocity.value = repocity.city.toLowerCase();
				return repocity;
			});
		}

		/**
		 * Create filter function for a query string
		 */
		function createFilterForCity(query) {
			var lowercaseQueryCity = angular.lowercase(query);

			return function filterFn(item) {
				return (item.value.indexOf(lowercaseQueryCity) === 0);
			};

		}
		//--------------for autocomplete city-----End----------//



		//--------------for autocomplete State-----Begin----------


		//var $scope = this;

		//$scope.simulateQuery = false;
		//$scope.isDisabled = false;

		$scope.reposstate = loadAllState();
		$scope.querySearchState = querySearchState;
		$scope.selectedItemChangeState = selectedItemChangeState;
		$scope.searchTextChangeState = searchTextChangeState;


		function querySearchState(query) {
			var results = query ? $scope.reposstate.filter(createFilterForCity(query)) : $scope.reposstate,
				deferred;
			if ($scope.simulateQuery) {
				deferred = $q.defer();
				$timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
				return deferred.promise;
			} else {
				return results;
			}
		}

		function searchTextChangeState(text) {
			$log.info('Text changed to ' + text);
		}

		function selectedItemChangeState(item) {
			$log.info('Item changed to ' + JSON.stringify(item));
		}

		/**
		 * Build `components` list of key/value pairs
		 */
		function loadAllState() {
			var reposState = [
				{

					'state': 'Maharashtra'
				},
				{

					'state': 'karnataka'
				},
				{
					'state': 'UP'
				}
			];
			return reposState.map(function (repostates) {
				repostates.value = repostates.state.toLowerCase();
				return repostates;
			});
		}

		/**
		 * Create filter function for a query string
		 */
		function createFilterForState(query) {
			var lowercaseQueryState = angular.lowercase(query);

			return function filterFn(item) {
				return (item.value.indexOf(lowercaseQueryState) === 0);
			};

		}
		//--------------for autocomplete State-----End----------//



		//--------------for autocomplete Shop Type-----Begin----------
		//var $scope = this;

		//$scope.simulateQuery = false;
		//$scope.isDisabled = false;

		$scope.reposShopType = loadAllShopType();
		$scope.querySearchShopType = querySearchShopType;
		$scope.selectedItemChangeShopType = selectedItemChangeShopType;
		$scope.searchTextChangeShopType = searchTextChangeShopType;

		// ******************************
		// Internal methods
		// ******************************

		/**
		 * Search for repos... use $timeout to simulate
		 * remote dataservice call.
		 */
		function querySearchShopType(query) {
			var results = query ? $scope.reposShopType.filter(createFilterForShopType(query)) : $scope.reposShopType,
				deferred;
			if ($scope.simulateQuery) {
				deferred = $q.defer();
				$timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
				return deferred.promise;
			} else {
				return results;
			}
		}

		function searchTextChangeShopType(text) {
			$log.info('Text changed to ' + text);
		}

		function selectedItemChangeShopType(item) {
			$log.info('Item changed to ' + JSON.stringify(item));
		}

		/**
		 * Build `components` list of key/value pairs
		 */
		function loadAllShopType() {
			var reposshopType = [
				{
					'shopType': 'Canteen'

				},
				{
					'shopType': 'Hotel'
				},
				{
					'shopType': 'Caterers'
				},
				{
					'shopType': 'Shop'
				},
				{
					'shopType': 'School'
				}
			];
			return reposshopType.map(function (reposhoptype) {
				reposhoptype.value = reposhoptype.shopType.toLowerCase();
				return reposhoptype;
			});
		}

		/**
		 * Create filter function for a query string
		 */
		function createFilterForShopType(query) {
			var lowercaseQueryShopType = angular.lowercase(query);

			return function filterFn(item) {
				return (item.value.indexOf(lowercaseQueryShopType) === 0);
			};

		}
		//--------------for autocomplete Shop type------End---------

		//-----for dropdown of Shop Type------------//
		$scope.selectShopType;
		$scope.cust_type;
		$scope.shopTypes = [{ 'shop_type': 'AC' }, { 'shop_type': 'Non-AC' }];

		$scope.dropdownCustType = [{ 'custtype': 'Canteen' },
		{ 'custtype': 'Shop' },
		{ 'custtype': 'Caterers' },
		{ 'custtype': 'Hotel' }];
		$scope.selectCustType;
		$scope.shopcusttype;

		$scope.customerData =
			{
				'fName': '',
				'lName': '',
				'custType': '',
				'shopNo': '',
				'area': '',
				'buildingName': '',
				'email': '',
				'street': '',
				'state': '',
				'shopType': '',
				'city': '',
				'zone': '',
				'contact': ''
			}


		//---- Method For Insert Customers
		$scope.insertCustomer = function () {
			alert("inside insert customersssss....");
			$scope.customerData.custType = $scope.selectCustType.custtype;
			$scope.customerData.shopType = $scope.selectShopType.shop_type;
			$scope.customerData.city = $scope.cities;
			$scope.customerData.state = $scope.states;
			alert("$scope.print autocomplete==>>>" + angular.toJson($scope.customerData.city));
			console.log("insert with dropdown----->>" + angular.toJson($scope.customerData));
			Appservice.insertCustomer($scope.customerData).then(function (successResponse) {
				if (successResponse.data)
					$scope.list = successResponse.data.ulist;
				alert("inside insert controller appservice---");
			}, function (errorResponse) {
				alert(errorResponse);
				$scope.msg = errorResponse.message;
				$scope.statusval = errorResponse.status;
			});
		}
		//}


		//---------controller for dialog-----

		//   function GreetingController($scope, $mdDialog) {
		// Assigned from construction <code>locals</code> options...
		//  $scope.employee = employee;

		$scope.display=function()
		{
			alert("jjjjjkk");
		}
		$scope.showTabDialog = function (ev) {
			alert("called")
			console.log("called")

			$mdDialog.show({
				controller: DialogController,
				templateUrl: 'app/InsertCustomers/tabDialog.tmpl.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: true
			})
				.then(function (answer) {
					$scope.status = 'You said the information was "' + answer + '".';
				}, function () {
					$scope.status = 'You cancelled the dialog.';
				});
		};


		// $scope.closeDialog = function() {
		//   // Easily hides most recent dialog shown...
		//   // no specific instance reference is needed.
		//   $mdDialog.hide();
		// };
	}
	function DialogController($scope, $mdDialog) {
		$scope.hide = function () {
			$mdDialog.hide();
		};

		$scope.cancel = function () {
			$mdDialog.cancel();
		};

		$scope.answer = function (answer) {
			$mdDialog.hide(answer);
		};
	}


})();