(function () {
    'use strict';

    angular
        .module('app')
        .factory('customerSvc', customerSvc);

    customerSvc.$inject = ['$http'];

    function customerSvc($http) {
        var baseUrl = "/travel/"
        var service = {
            getAllCustomers: getAllCustomers,
            detailCustomer: detailCustomer,
            addCustomer: addCustomer,
            editCustomer: editCustomer,
            deleteCustomer: deleteCustomer,
        };

        return service;

        function getAllCustomers() {
            let rep = $http.get(baseUrl + "api/customer");
            return rep;
        }

        function detailCustomer(id) {
            let rep = $http.get(baseUrl + "api/customer/"+id);
            return rep;
        }

        function addCustomer(customer) {
            let rep = $http.post(baseUrl + "api/customer", customer);
            return rep;
        }

        function editCustomer(customer) {
            let rep = $http.put(baseUrl + "api/customer/" + customer.CustomerID, customer);
            return rep;
        }

        function deleteCustomer(id) {
            let rep = $http.delete(baseUrl + "api/customer/" + id);
            return rep;
        }
    }
})();