(function() {
    'use strict';
    
    /**
    * Filter to capitalize first string letter
    */
    angular
        .module('app')
        .filter('capitalize', capitalize);

    function capitalize() {
        return filter;

        function filter(input) {
            if (input !== null) {
                return input.replace(/\w\S*/g, function(txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                });
            }
        }
    }
 })();