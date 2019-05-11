(function () {
    'use strict';

    angular
        .module('app')
        .controller('editCustomerCtrl', editCustomerCtrl);

    editCustomerCtrl.$inject = ['$location','customerSvc','ShareData'];

    function editCustomerCtrl($location, customerSvc, ShareData) {
        
        var vm = this;
        vm.customerInfo = null;
        vm.loadEditCustomerViewData = loadEditCustomerViewData;
        vm.updateCustomer = updateCustomer;
        vm.close = close;
        vm.loadEditCustomerViewData();

        function close()
        {
            $location.path('/CustomerList');
        }
        function loadEditCustomerViewData()
        {
            
            customerSvc.detailCustomer(ShareData.value).then(function (d) {
                //console.log(d.dada);
                vm.customerInfo = d.data;
            })
        }

        function updateCustomer()
        {
            let Customer = {
                CustomerID: vm.customerInfo.CustomerID,
                Address: vm.customerInfo.Address,
                City: vm.customerInfo.City,
                CompanyName: vm.customerInfo.CompanyName, 
                ContactName: vm.customerInfo.ContactName,
                ContactTitle: vm.customerInfo.ContactTitle,
                Country: vm.customerInfo.Country,
                Fax: vm.customerInfo.Fax,
                Phone: vm.customerInfo.Phone,
                PostalCode: vm.customerInfo.PostalCode,
                Region: 'Test'
            };   
            
            customerSvc.editCustomer(Customer).then(function (d) {
                console.log(d.data);
                $location.path('/CustomerList');
            });
        }
    }
})();
