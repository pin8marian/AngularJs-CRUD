(function () {
    'use strict';

    angular
        .module('app')
        .filter('custFilter', custFilter);

    custFilter.$inject = [];

    function custFilter() {
        return function (items, letter) {
            var filtered = [];
            
            if (letter != undefined) {
                let letterToLower= letter.toLowerCase();
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    if (item.CompanyName.toLowerCase().indexOf(letterToLower) !== -1 || item.City.toLowerCase().indexOf(letterToLower) !== -1 || item.Country.toLowerCase().indexOf(letterToLower) !== -1 || item.Phone.indexOf(letterToLower) !== -1) {
                        filtered.push(item);
                    }
                }
                return filtered;
            }
            else return items;
        };
    }
})();
