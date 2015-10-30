(function() {
    'use strict';

    angular
        .module('app')
        .directive('spreadSheet', spreadSheet);
        
    spreadSheet.$inject = [];

    function spreadSheet() {

        var directive = {
            restrict: 'E',
            template: '<input type="search" class="form-control" ng-model="tableResults" placeholder="filter names...">' + 
                        '<table class="table">' + 
                            '<thead>' + 
	                        '<tr>' + 
	                            '<th ng-repeat="column in columns">' + 
                                    '<a data-href="#" ng-click="sort(column)" ng-cloak>{{column | capitalize}}' + 
                                        '<span class="glyphicon" ng-show="sortKey==\'{{column}}\'" ng-class="{\'glyphicon-chevron-up\':reverse, \'glyphicon-chevron-down\':!reverse}"></span>' + 
                                    '</a>' + 
                                '</th>' + 
	                        '</tr>' + 
                            '</thead>' + 
                            '<tbody>' + 
	                            '<tr ng-repeat="element in elements | orderBy:sortKey:reverse | filter: tableResults as results">' + 
	                                '<td ng-cloak ng-repeat="(key, value) in element">{{value}}</td>' + 
	                            '</tr>' + 
                            '</tbody>' + 
                        '</table>' + 
                        '<div ng-if="results.length == 0">' + 
                            '<strong>No results found...</strong>' + 
                        '</div>'
        };

        return directive;
    }

})();