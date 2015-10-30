(function () {
    'use strict';

    /**
    * Control the SpreadSheet Loading -- https://spreadsheets.google.com/feeds/list/1AH62iGl2alh1lVK6ENpRFLNEliHL9z92YO_HV-j3RqY/1/public/basic?alt=json
    */
    angular
        .module('app')
        .controller('SpreadSheetCtrl', SpreadSheetCtrl);

    SpreadSheetCtrl.$inject = ['$scope', 'Tabletop'];

    function SpreadSheetCtrl($scope, Tabletop) {
        $scope.loading = true; // start loading...

        // Sort function
        $scope.sort = function (keyname) {
            $scope.sortKey = keyname;
            $scope.reverse = !$scope.reverse;
        }

        Tabletop.then(function (ttdata) {
            var spreadSheet = ttdata[0];

            angular.forEach(spreadSheet, function (value, key) {
                var sheet   = "Sugestões em debate", // Sheet to retrive information
                    sortKey = ""; // column to sort

                if(sheet.toLowerCase() == key.toLowerCase()){
                    $scope.columns  = value.original_columns; // Columns
                    $scope.elements = value.elements; // Values
                    $scope.sortKey  = !sortKey || sortKey.indexOf(value.original_columns) != 0 ? value.original_columns[0].toLowerCase() : sortKey.toLowerCase(); // Sort value (if sort value is fill and exists inside array 'value.original_columns' that will be use; if not the value to use inside sort var will be the first column avaible
                    
                    $scope.loading  = false; // stop loading
                    
                    return false;
                }
            });
        });
    }
})();