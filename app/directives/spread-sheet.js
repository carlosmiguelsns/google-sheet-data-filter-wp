(function() {
    'use strict';

    angular
        .module('app')
        .directive('spreadSheet', spreadSheet);
        
    spreadSheet.$inject = [];

    function spreadSheet() {

        var directive = {
            restrict: 'E',
            templateUrl: 'directives/table.html'
        };

        return directive;
    }

})();