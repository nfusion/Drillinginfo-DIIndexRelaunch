<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

/**
 * Drillinginfo_Index_Application Class
 *
 * @class Drillinginfo_Index_Application
 * @version	1.0.0
 * @since 1.0.0
 * @package	Drillinginfo_Index
 * @author Katherine White
 */
final class Drillinginfo_Index_Application {
	/**
	 * Drillinginfo_Index_Application The single instance of Drillinginfo_Index_Application.
	 * @var 	object
	 * @access  private
	 * @since 	1.0.0
	 */
	private static $_instance = null;

	/**
	 * The string containing the dynamically generated hook token.
	 * @var     string
	 * @access  private
	 * @since   1.0.0
	 */
	private $_hook;

	/**
	 * Constructor function.
	 * @access  public
	 * @since   1.0.0
	 */
	public function __construct () {

		// set the application base URL for Ember
		add_action( 'wp_head', array( $this, 'set_base_url' ) );

		// include application JavaScript and CSS
		add_action('wp_enqueue_scripts', array($this, 'application_scripts'));
		add_action ('wp_enqueue_scripts', array($this, 'application_styles'));

		// add container element following body content.
		add_filter('the_content',array($this,'application_container'));
	} // End __construct()

	/**
	 * Main Drillinginfo_Index_Application Instance
	 *
	 * Ensures only one instance of Drillinginfo_Index_Application is loaded or can be loaded.
	 *
	 * @since 1.0.0
	 * @static
	 * @return Main Drillinginfo_Index_Application instance
	 */
	public static function instance () {
		if ( is_null( self::$_instance ) )
			self::$_instance = new self();
		return self::$_instance;
	} // End instance()

	/**
	 * Register the admin screen.
	 * @access  public
	 * @since   1.0.0
	 * @return  void
	 */
	public function set_base_url () {
		
	} // End set_base_url()

	/**
	 * Output the markup for the settings screen.
	 * @access  public
	 * @since   1.0.0
	 * @return  void
	 */
	public function application_scripts () {

	} // End application_scripts()

	/**
	 * Register the settings within the Settings API.
	 * @access  public
	 * @since   1.0.0
	 * @return  void
	 */
	public function application_styles () {

	} // End application_styles()

	/**
	 * Render the settings.
	 * @access  public
	 * @since   1.0.0
	 * @return  void
	 */
	public function application_container (  ) {
		
	} // End application_container()
} // End Class
