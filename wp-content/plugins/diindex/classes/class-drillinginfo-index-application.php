<?php

if (!defined('ABSPATH')) {
    exit;
} // Exit if accessed directly

/**
 * Drillinginfo_Index_Application Class.
 *
 * @class Drillinginfo_Index_Application
 *
 * @version	1.0.0
 *
 * @since 1.0.0
 *
 * @author Katherine White
 */
final class Drillinginfo_Index_Application
{
    /**
     * Drillinginfo_Index_Application The single instance of Drillinginfo_Index_Application.
     *
     * @var object
     *
     * @since 	1.0.0
     */
    private static $_instance = null;

    /**
     * Constructor function.
     *
     * @since   1.0.0
     */
    public function __construct()
    {

        // set the application base URL for Ember
        add_action('wp_head', array($this, 'set_base_url'));

        // include application JavaScript and CSS
        add_action('wp_enqueue_scripts', array($this, 'application_scripts'));
        add_action('wp_enqueue_scripts', array($this, 'application_styles'));

        // add container element following body content.
        add_filter('the_content', array($this, 'application_container'));
    }

 // End __construct()

    /**
     * Main Drillinginfo_Index_Application Instance.
     *
     * Ensures only one instance of Drillinginfo_Index_Application is loaded or can be loaded.
     *
     * @since 1.0.0
     * @static
     *
     * @return Main Drillinginfo_Index_Application instance
     */
    public static function instance()
    {
        if (is_null(self::$_instance)) {
            self::$_instance = new self();
        }

        return self::$_instance;
    }

 // End instance()

    /**
     * Register the admin screen.
     *
     * @since   1.0.0
     *
     * @return void
     */
    public function set_base_url()
    {
        if (is_front_page()) {
            echo '<base href="/" />';
        }
    }

 // End set_base_url()

    /**
     * Output the markup for the settings screen.
     *
     * @since   1.0.0
     *
     * @return void
     */
    public function application_scripts()
    {
        if (is_front_page()) {
            wp_enqueue_script('di-app-vendor', DrillingInfo_Index::instance()->plugin_url.'app/dist/assets/vendor.js', array(), DrillingInfo_Index::instance()->version, true);
            wp_enqueue_script('di-app-ember-dev', DrillingInfo_Index::instance()->plugin_url.'app/dist/assets/diindex-ember-dev.js', array(), DrillingInfo_Index::instance()->version, true);
        }
    }

 // End application_scripts()

    /**
     * Register the settings within the Settings API.
     *
     * @since   1.0.0
     *
     * @return void
     */
    public function application_styles()
    {
        if (is_front_page()) {
            wp_enqueue_style('di-app-vendor', DrillingInfo_Index::instance()->plugin_url.'app/dist/assets/vendor.css', array(), DrillingInfo_Index::instance()->version);
            wp_enqueue_style('di-app-ember-dev', DrillingInfo_Index::instance()->plugin_url.'app/dist/assets/diindex-ember-dev.css', array(), DrillingInfo_Index::instance()->version);
        }
    }

 // End application_styles()

    /**
     * Render the settings.
     *
     * @since   1.0.0
     *
     * @return void
     */
    public function application_container($content)
    {
        $content .= '<div id="app"></div>';

        return $content;
    }

 // End application_container()
} // End Class
