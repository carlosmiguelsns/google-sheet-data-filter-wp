(function () {
    'use strict';

    /**
    * Control the SpreadSheet Loading
    */
    angular
        .module('app')
        .controller('SpreadSheetCtrl', SpreadSheetCtrl);

    SpreadSheetCtrl.$inject = ['$scope', '$filter', 'Tabletop'];

    function SpreadSheetCtrl($scope, $filter, Tabletop) {
        $scope.loading = true; // start loading...

        Tabletop.then(function (ttdata) {
            var spreadSheet = ttdata[0];

            angular.forEach(spreadSheet, function (value, key) {
                //var sheet = shortcode_vars.sheet, // Sheet to retrive information -- Sugestões em debate
                //    sortKey = shortcode_vars.sortColumn; // column to sort

                var sheet = "sheet1", // Sheet to retrive information -- Sugestões em debate
                    sortKey = ""; // column to sort

                if (sheet.toLowerCase() == key.toLowerCase()) {
                    //var columns = value.pretty_columns 
                    //for(var key in columns) {
                    //    if(key != ""){
                    //        columns[key] = $filter('removeDiacritics')(columns[key]);
                    //    }
                    //}
                    $scope.columns = value.pretty_columns; // Columns
                    $scope.elements = convertNumbToInt(value.elements); // Values
                    $scope.predicate = normalizeColumn(sortKey, value.pretty_columns); // Column/sort

                    $scope.reverse = false;
                    $scope.loading = false; // stop loading

                    return false;
                }
            });
        });

        // Sort        
        $scope.order = function (predicate) {
            //predicate = $filter('removeDiacritics')(predicate); // remove accents from string letters

            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
            $scope.predicate = predicate;
        };

        // Capitalize/Set Column Order
        function normalizeColumn(txt, columns) {
            var finalText = "";
            if (txt == "") {
                for (var value in columns) {
                    if (columns[value]) return false;
                    //finalText = columns[value].charAt(0).toUpperCase() + columns[value].substr(1).toLowerCase();
                    //return false;
                }
            } else {
                finalText = txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }

            return finalText;
        }

        // Convert numbers to int if they are in strings
        function convertNumbToInt(data) {
            angular.forEach(data, function (value, key) {
                var objPos = key;

                angular.forEach(value, function (v, k) {
                    var reg = /^\d+$/; // RegEx to check if value is number
                    if (v.match(reg)) {
                        data[objPos][k] = parseInt(v, 10);
                    }
                });
            });

            return data;
        }
    }
})();