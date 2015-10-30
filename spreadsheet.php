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
        wp_register_script('app_config_js', '/angular/js/config.js', array(), '', true);
    }
    add_action('wp_enqueue_scripts', 'app_scripts');

    function spreadsheet_shortcode( $atts ){
        $a = shortcode_atts( array(
		    'spreadsheetKey'    => '',
            'sheetName'         => '',
            'sortColumn'        => ''
	    ), $atts );

        $script_params = array(
            'spreadSheetKey'    => esc_attr($a['spreadsheetKey']),
            'sheetName'         => esc_attr($a['spreadsheetKey']),
            'sortColumn'        => esc_attr($a['sheetName'])
        );

        wp_enqueue_script('app_config_js');
        wp_localize_script('app_config_js','spreadsheatVars', $script_params);

    }
    add_shortcode('spreadsheet', 'spreadsheet_shortcode');
?>
