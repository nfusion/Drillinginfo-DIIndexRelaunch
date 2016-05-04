<?php
/**
 * Plugin Name: Drillinginfo Index
 * Plugin URI: http://diindex.drillinginfo.com
 * Description: Ember application controls for embedded DI Index experience.
 * Version: 1.0.0
 * Author: Katherine White
 * Author URI: http://nfusion.com/
 * Requires at least: 4.0.0
 * Tested up to: 4.0.0
 *
 * Text Domain: drillinginfo-index
 * Domain Path: /languages/
 *
 * @package Drillinginfo_Index
 * @category Plugin
 * @author Katherine White
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

/**
 * Returns the main instance of Drillinginfo_Index to prevent the need to use globals.
 *
 * @since  1.0.0
 * @return object Drillinginfo_Index
 */
function Drillinginfo_Index() {
	return Drillinginfo_Index::instance();
} // End Drillinginfo_Index()

add_action( 'plugins_loaded', 'Drillinginfo_Index' );

/**
 * Main Drillinginfo_Index Class
 *
 * @class Drillinginfo_Index
 * @version	1.0.0
 * @since 1.0.0
 * @package	Drillinginfo_Index
 * @author Katherine White
 */
final class Drillinginfo_Index {
	/**
	 * Drillinginfo_Index The single instance of Drillinginfo_Index.
	 * @var 	object
	 * @access  private
	 * @since 	1.0.0
	 */
	private static $_instance = null;

	/**
	 * The token.
	 * @var     string
	 * @access  public
	 * @since   1.0.0
	 */
	public $token;

	/**
	 * The version number.
	 * @var     string
	 * @access  public
	 * @since   1.0.0
	 */
	public $version;

	/**
	 * The plugin directory URL.
	 * @var     string
	 * @access  public
	 * @since   1.0.0
	 */
	public $plugin_url;

	/**
	 * The plugin directory path.
	 * @var     string
	 * @access  public
	 * @since   1.0.0
	 */
	public $plugin_path;

	// Admin - Start
	/**
	 * The application object.
	 * @var     object
	 * @access  public
	 * @since   1.0.0
	 */
	public $application;


	/**
	 * Constructor function.
	 * @access  public
	 * @since   1.0.0
	 */
	public function __construct () {
		$this->token 			= 'drillinginfo-index';
		$this->plugin_url 		= plugin_dir_url( __FILE__ );
		$this->plugin_path 		= plugin_dir_path( __FILE__ );
		$this->version 			= '1.0.0';

		// Application - Start
		require_once( 'classes/class-drillinginfo-index-application.php' );
			$this->application = Drillinginfo_Index_Application::instance();

		
		register_activation_hook( __FILE__, array( $this, 'install' ) );

		add_action( 'init', array( $this, 'load_plugin_textdomain' ) );
	} // End __construct()

	/**
	 * Main Drillinginfo_Index Instance
	 *
	 * Ensures only one instance of Drillinginfo_Index is loaded or can be loaded.
	 *
	 * @since 1.0.0
	 * @static
	 * @see Drillinginfo_Index()
	 * @return Main Drillinginfo_Index instance
	 */
	public static function instance () {
		if ( is_null( self::$_instance ) )
			self::$_instance = new self();
		return self::$_instance;
	} // End instance()

	/**
	 * Load the localisation file.
	 * @access  public
	 * @since   1.0.0
	 */
	public function load_plugin_textdomain() {
		load_plugin_textdomain( 'drillinginfo-index', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
	} // End load_plugin_textdomain()

	/**
	 * Cloning is forbidden.
	 * @access public
	 * @since 1.0.0
	 */
	public function __clone () {
		_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?' ), '1.0.0' );
	} // End __clone()

	/**
	 * Unserializing instances of this class is forbidden.
	 * @access public
	 * @since 1.0.0
	 */
	public function __wakeup () {
		_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?' ), '1.0.0' );
	} // End __wakeup()

	/**
	 * Installation. Runs on activation.
	 * @access  public
	 * @since   1.0.0
	 */
	public function install () {
		$this->_log_version_number();
	} // End install()

	/**
	 * Log the plugin version number.
	 * @access  private
	 * @since   1.0.0
	 */
	private function _log_version_number () {
		// Log the version number.
		update_option( $this->token . '-version', $this->version );
	} // End _log_version_number()
} // End Class
