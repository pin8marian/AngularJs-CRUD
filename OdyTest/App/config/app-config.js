(function () {
    'use strict';
    angular
        .module('app')
        .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

            $routeProvider.when('/CustomerList', { //Routing for show list of customers
                templateUrl: '/travel/App/views/CustomerList.html',
                controller: 'customerCtrl',
                controllerAs: "vm"
            }).when('/AddCustomer', { //Routing for add customers
                templateUrl: '/travel/App/Views/AddCustomer.html',
                controller: 'customerCtrl',
                controllerAs: "vm"
            })
            .when('/EditCustomer', { //Routing for geting single customer details
                templateUrl: '/travel/App/Views/EditCustomer.html',
                controller: 'editCustomerCtrl',
                controllerAs: "vm"
             
            })
            .when('/DeleteCustomer/:custId', { //Routing for delete customer
                templateUrl: '/travel/App/Views/DeleteCustomer.html',
                controller: 'deleteCustomerCtrl',
                controllerAs: "vm"
                })
                .when('/DetailCustomer/', { //Routing for detail customer
                    templateUrl: '/travel/App/Views/DetailCustomer.html',
                    controller: 'detailCustomerCtrl',
                    controllerAs: "vm"
                })
            .otherwise({ //Default Routing
                controller: 'customerCtrl',
                controllerAs: "vm"
            })
        }]);

    angular.module('app').factory("ShareData", function () {
        return { value: 0 }
    });  
})();
