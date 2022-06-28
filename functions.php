<?php
/* add title tag to my html */
add_theme_support('title-tag');

/* allow to set page thumbnail */
add_theme_support( 'post-thumbnails' );

/* add scripts and css */
//add my custom css in head	
function add_custom_files(){
    wp_enqueue_style( 'style', get_template_directory_uri() . '/dist/styles/main.css');
};
add_action('wp_enqueue_scripts', 'add_custom_files');

//add my custom js after footer
function add_custom_script(){
    wp_enqueue_script( 'script', get_template_directory_uri() . '/dist/scripts/bundle.js');
};
add_action('wp_footer', 'add_custom_script');

/* add image size */
add_image_size('avatar', 300, 400, array( 'center', 'center' ));
add_image_size('hero', 460, 690, array('center', 'center'));

/* add menu(s) */
function register_my_menu() {
    register_nav_menu('header-menu',__( 'Header Menu' ));
};
add_action( 'init', 'register_my_menu' );

/* hide admin bar */
function remove_admin_bar() {
    if (!current_user_can('administrator') && !is_admin()) {
        show_admin_bar(false);
    }
}
add_action('after_setup_theme', 'remove_admin_bar');
//even for admin
add_filter( 'show_admin_bar', '__return_false' );

/* add initial scale */
function add_viewport_meta_tag() {
    echo '<meta name="viewport" content="width=device-width, initial-scale=1">';
}
add_action( 'wp_head', 'add_viewport_meta_tag' , '1' );

//remove p wrap tag in cf7 form
add_filter('wpcf7_autop_or_not', '__return_false');