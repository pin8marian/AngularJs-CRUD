(function () {
    'use strict';

    angular
        .module('app')
        .controller('customerCtrl', customerCtrl);

    customerCtrl.$inject = ['$location', '$routeParams', '$route', 'customerSvc','ShareData'];

    function customerCtrl($location, $routeParams, $route, customerSvc, ShareData) {
        
        var vm = this;
        vm.custId = 0;
        vm.CustomerList = [];
        vm.customerDetails = {};
        vm.getAllCustomers = getAllCustomers;
        vm.editCustomer = editCustomer;
        vm.deleteCustomer = deleteCustomer;
        vm.detailCustomer = detailCustomer;
        vm.showLoading = false;
        vm.close = close;
        vm.query = '';
        getAllCustomers();
        
        vm.custId = $routeParams.custId;

        function getAllCustomers()
        {
            vm.showLoading = true;
            customerSvc.getAllCustomers().then(function (d) {
               
                vm.CustomerList = d.data;
                //console.log(vm.CustomerList);
            }).then(function () { vm.showLoading = false;});
        }

        function detailCustomer(customerID) {
            ShareData.value = customerID;
            $location.path('/DetailCustomer/');
        }
        
        function editCustomer(customerID) {
            ShareData.value = customerID;
            $location.path('/EditCustomer');
        }

        function deleteCustomer(customerID) {
            ShareData.value = customerID;
            $location.path('/DeleteCustomer/' + customerID);
        }

        function close()
        {
            $location.path('/CustomerList');
        }
    }
})();
