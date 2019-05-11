(function () {
    'use strict';

    angular
        .module('app')
        .controller('detailCustomerCtrl', detailCustomerCtrl);

    detailCustomerCtrl.$inject = ['$location', 'ShareData','customerSvc'];

    function detailCustomerCtrl($location, ShareData, customerSvc) {
        /* jshint validthis:true */
        var vm = this;
        vm.customerInfo = null;
        vm.getCustomerDetail = getCustomerDetail;
        vm.Close = Close;
        vm.getCustomerDetail();
        function getCustomerDetail() {
            customerSvc.detailCustomer(ShareData.value).then(function (d) {
                vm.customerInfo = d.data;
            })
        }
        function Close() {
            $location.path('/CustomerList');
        }

    }
})();
