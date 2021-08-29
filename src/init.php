<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package GGL
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses  {wp-blocks} for block type registration & related functions.
 * @uses  {wp-element} for WP Element abstraction — structure of blocks.
 * @uses  {wp-i18n} to internationalize the block's text.
 * @uses  {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function guten_gallery_quote_cgb_block_assets() { // phpcs:ignore
	// Register block styles for both frontend + backend.
	$version = gmdate( 'ymd-Gis', filemtime( plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ) ) );

	wp_register_style(
		'guten_gallery_quote-cgb-style-css',
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ),
		is_admin() ? array( 'wp-editor' ) : null,
		$version
	);

	$version = gmdate( 'ymd-Gis', filemtime( plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ) ) );

	// Register block editor script for backend.
	wp_register_script(
		'guten_gallery_quote-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		$version,
		true // Enqueue the script in the footer.
	);

	$version = gmdate( 'ymd-Gis', filemtime( plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ) ) );

	// Register block editor styles for backend.
	wp_register_style(
		'guten_gallery_quote-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		$version // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `cgbGlobal` object.
	wp_localize_script(
		'guten_gallery_quote-cgb-block-js',
		'cgbGlobal', // Array containing dynamic data for a JS Global.
		array(
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
		// Add more data here that you want to access from `cgbGlobal` object.
		)
	);

	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link  https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type(
		'cgb/block-guten-gallery-quote',
		array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'           => 'guten_gallery_quote-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script'   => 'guten_gallery_quote-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'    => 'guten_gallery_quote-cgb-block-editor-css',

			'render_callback' => 'frontend_gallery',
		)
	);
}

// Hook: Block assets.
add_action( 'init', 'guten_gallery_quote_cgb_block_assets' );

/**
 * Enqueue lightbox support
 *
 * @return void
 */
function guten_gallery_quote_ligtbox_support() {
	$ligtboxjs   = 'helpers/swipebox.min.js';
	$lightboxcss = 'helpers/swipebox.min.css';
	$customjs    = 'helpers/custom.functions.js';

	// create my own version codes.
	$ligtboxjs_ver  = gmdate( 'ymd-Gis', filemtime( plugin_dir_path( __FILE__ ) . $ligtboxjs ) );
	$ligtboxcss_ver = gmdate( 'ymd-Gis', filemtime( plugin_dir_path( __FILE__ ) . $lightboxcss ) );
	$custom_js_ver  = gmdate( 'ymd-Gis', filemtime( plugin_dir_path( __FILE__ ) . $customjs ) );

	wp_enqueue_script( 'jquery' );
	wp_enqueue_script( 'lightbox_js', plugins_url( $ligtboxjs, __FILE__ ), array( 'jquery' ), $ligtboxjs_ver, true );
	wp_enqueue_script( 'custom_js', plugins_url( $customjs, __FILE__ ), array( 'jquery', 'lightbox_js' ), $ligtboxjs_ver, true );

	wp_register_style( 'lightboxcss', plugins_url( $lightboxcss, __FILE__ ), false, $custom_js_ver . '223213' );
	wp_enqueue_style( 'lightboxcss' );
}

add_action( 'wp_enqueue_scripts', 'guten_gallery_quote_ligtbox_support' );

/**
 * Rendering Dynamic Gutenberg
 *
 * @param array $attributes list of attributes from guten state.
 * @return string
 */
function guten_gallery_quote_rontend_gallery( $attributes ) {

	ob_start();

	echo '<div class="gallery gallery-' . esc_attr( uniqid() ) . '" >';

	foreach ( $attributes['gallery'] as $key => $media ) {
		?>
			<a class="light-img" href="<?php echo esc_url( $media['mediaUrl'] ); ?>" >
				<img src="<?php echo esc_url( $media['mediaUrl'] ); ?>" />
			</a>
		<?php
	}
	echo '</div>';
	return ob_get_clean();
}
