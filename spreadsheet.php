<?php
    /*
    Plugin Name: Angular SpreadSheet
    Plugin URI: ***
    Description: List data from a Google spreadsheet
    Author: CMS
    Version: 1.0
    Author URI: ***
    */

    function app_scripts() {
        wp_enqueue_script('angular', plugin_dir_url( __FILE__ ) . 'app/lib/angular.min.js', array(), '', true);
        wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-1.11.3.min.js', array(), '', true);
        wp_enqueue_script('bootstrap', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js', array('jquery'), '', true);

        wp_enqueue_script('app', plugin_dir_url( __FILE__ ) . 'app/app.js', array(), '', true);
        wp_enqueue_script('config', plugin_dir_url( __FILE__ ) . 'app/config.js', array(), '', true);

        wp_enqueue_script('tabletop', plugin_dir_url( __FILE__ ) . 'app/modules/tabletop/tabletop.js', array(), '', true);
        wp_enqueue_script('tabletProvider', plugin_dir_url( __FILE__ ) . 'app/modules/tabletop/TabletopProvider.js', array(), '', true);
        wp_enqueue_script('dirPagination', plugin_dir_url( __FILE__ ) . 'app/modules/dirPagination/dirPagination.js', array(), '', true);

        wp_enqueue_script('spreadSheetController', plugin_dir_url( __FILE__ ) . 'app/controllers/SpreadSheetController.js', array(), '', true);

        wp_enqueue_script('loading', plugin_dir_url( __FILE__ ) . 'app/directives/loading.js', array(), '', true);
        wp_enqueue_script('spreadSheet', plugin_dir_url( __FILE__ ) . 'app/directives/spread-sheet.js', array(), '', true);

        wp_enqueue_script('capitalize', plugin_dir_url( __FILE__ ) . 'app/filters/capitalize.js', array(), '', true);
        wp_enqueue_script('removeDiacritics', plugin_dir_url( __FILE__ ) . 'app/filters/removeDiacritics.js', array(), '', true);
    }
    add_action('wp_enqueue_scripts', 'app_scripts');


    function spreadsheet_shortcode( $atts ){
        $a = shortcode_atts( array(
		    'key'           => '',
            'sheet'         => '',
            'sortColumn'    => ''
	    ), $atts );

        $script_params = array(
            'key'           => esc_attr($a['key']),
            'sheet'         => esc_attr($a['sheet']),
            'sortColumn'    => esc_attr($a['sortColumn'])
        );

        wp_localize_script('config','shortcode_vars', $script_params);

        $html = '<h1>Google SpreadSheet Angular App</h1>
                <div class="row">
                    <div class="col-md-12" ng-controller="SpreadSheetCtrl">
                        <loading></loading>
                        <spread-sheet></spread-sheet>
                    </div>
                </div>';

        return $html;
    }
    add_shortcode('spreadsheet', 'spreadsheet_shortcode');
?>
