(function() {
    'use strict';

    angular
        .module('app')
        .directive('loading', spreadSheet);
        
    spreadSheet.$inject = [];

    function spreadSheet() {

        var directive = {
            restrict: 'E',
            replace:true,
            template: '<div class="loading"><img src="images/loading.gif" width="50" height="50" /> Loading...</div>',
            link: link
        };

        return directive;
		
		function link(scope, element, attr){
			scope.$watch('loading', function (v) {
				if(v) {
					$(element).show();
				} else {
					$(element).hide();
				}
			});
		}
    }

})();