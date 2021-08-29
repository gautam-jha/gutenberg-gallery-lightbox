<?php
/**
 * Plugin Name: Gutenberg Gallery Lightbox
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: A lightbox gutenberg editor plugin to add beautiful image gallery.
 * Author: jhagautam
 * Author URI: https://github.com/gautam-jha
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: ggl-gallery
 *
 * @package GGL
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
