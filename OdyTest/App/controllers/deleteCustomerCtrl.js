(function () {
    'use strict';

    angular
        .module('app')
        .controller('deleteCustomerCtrl', deleteCustomerCtrl);

    deleteCustomerCtrl.$inject = ['$location', 'customerSvc', 'ShareData', '$routeParams'];

    function deleteCustomerCtrl($location, customerSvc, ShareData, $routeParams) {

        var vm = this;

        vm.deleteCustomer = deleteCustomer;
        vm.Close = Close;

        function Close() {
            $location.path('/CustomerList');
        }

        vm.custId = $routeParams.custId;

        function deleteCustomer(customerID) {
            customerSvc.deleteCustomer(customerID).then(function (d) {
                $location.path('/CustomerList');
            });
        }
    }
})();
