(function () {
    'use strict';

    angular
        .module('app')
        .config(function(TabletopProvider){
            TabletopProvider.setTabletopOptions({
                key: '1AH62iGl2alh1lVK6ENpRFLNEliHL9z92YO_HV-j3RqY' // Public SpreadSheet Key
                //key: '1-a2BwuOfztTfiht93pdeNaIqstju_bzn_sBMQUCp5Ig'
                //key: shortcode_vars.key
            });
        })
})();