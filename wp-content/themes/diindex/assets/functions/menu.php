<?php

// Register menus
register_nav_menus(
    array(
        'main-nav'     => __('The Main Menu', 'jointswp'),   // Main nav in header
        'footer-links' => __('Footer Links', 'jointswp'), // Secondary nav in footer
        'social-links' => __('Social Links', 'jointswp'),
    )
);

// The Top Menu
function joints_top_nav()
{
    wp_nav_menu(array(
        'container'      => false,                           // Remove nav container
        'menu_class'     => 'vertical medium-horizontal menu',       // Adding custom nav class
        'items_wrap'     => '<ul id="%1$s" class="%2$s" data-responsive-menu="accordion medium-dropdown">%3$s</ul>',
        'theme_location' => 'main-nav',                    // Where it's located in the theme
        'depth'          => 1,                             // Limit the depth of the nav (5 orig)
        'fallback_cb'    => false,                         // Fallback function (see below)
        'walker'         => new Topbar_Menu_Walker(),
    ));
}

// Big thanks to Brett Mason (https://github.com/brettsmason) for the awesome walker
class Topbar_Menu_Walker extends Walker_Nav_Menu
{
    public function start_lvl(&$output, $depth = 0, $args = array())
    {
        $indent = str_repeat("\t", $depth);
        $output .= "\n$indent<ul class=\"menu\">\n";
    }
}

// The Off Canvas Menu
function joints_off_canvas_nav()
{
    wp_nav_menu(array(
        'container'      => false,                           // Remove nav container
        'menu_class'     => 'vertical menu',       // Adding custom nav class
        'items_wrap'     => '<ul id="%1$s" class="%2$s" data-accordion-menu>%3$s</ul>',
        'link_before'         => '<span class="nav-item-inner">',
        'link_after'          => '</span>',
        'theme_location' => 'main-nav',                    // Where it's located in the theme
        'depth'          => 5,                                   // Limit the depth of the nav
        'fallback_cb'    => false,                         // Fallback function (see below)
        'walker'         => new Off_Canvas_Menu_Walker(),
    ));
}

class Off_Canvas_Menu_Walker extends Walker_Nav_Menu
{
    public function start_lvl(&$output, $depth = 0, $args = array())
    {
        $indent = str_repeat("\t", $depth);
        $output .= "\n$indent<ul class=\"vertical menu is-active\">\n";
    }
}

// The Footer Menu
function joints_footer_links()
{
    wp_nav_menu(array(
        'container'      => 'false',                         // Remove nav container
        'menu'           => __('Footer Links', 'jointswp'),    // Nav name
        'menu_class'     => 'menu',                          // Adding custom nav class
        'theme_location' => 'footer-links',             // Where it's located in the theme
        'depth'          => 0,                                   // Limit the depth of the nav
        'fallback_cb'    => '',                            // Fallback function
    ));
} /* End Footer Menu */

// The Social Menu
function joints_social_links()
{
    wp_nav_menu(array(
        'container'      => 'false',                         // Remove nav container
        'menu'           => __('Social Links', 'jointswp'),    // Nav name
        'menu_class'     => 'menu',                          // Adding custom nav class
        'theme_location' => 'social-links',             // Where it's located in the theme
        'depth'          => 0,                                   // Limit the depth of the nav
        'fallback_cb'    => '',                            // Fallback function
    ));
} /* End Social Menu */

// Header Fallback Menu
function joints_main_nav_fallback()
{
    wp_page_menu(array(
        'show_home'   => true,
        'menu_class'  => '',                              // Adding custom nav class
        'include'     => '',
        'exclude'     => '',
        'echo'        => true,
        'link_before' => '',                           // Before each link
        'link_after'  => '',                             // After each link
    ));
}

// Footer Fallback Menu
function joints_footer_links_fallback()
{
    /* You can put a default here if you like */
}

// Add Foundation active class to menu
function required_active_nav_class($classes, $item)
{
    if ($item->current == 1 || $item->current_item_ancestor == true) {
        $classes[] = 'active';
    }

    return $classes;
}
add_filter('nav_menu_css_class', 'required_active_nav_class', 10, 2);

/*  http://wordpress.stackexchange.com/questions/2802/display-a-portion-branch-of-the-menu-tree-using-wp-nav-menu/2809#2809 */
add_filter('wp_nav_menu_objects', 'submenu_limit', 10, 2);

function submenu_limit($items, $args)
{
    if (empty($args->submenu)) {
        return $items;
    }

    $ids = wp_filter_object_list($items, array('title' => $args->submenu), 'and', 'ID');
    $parent_id = array_pop($ids);
    $children = submenu_get_children_ids($parent_id, $items);

    foreach ($items as $key => $item) {
        if (!in_array($item->ID, $children)) {
            unset($items[$key]);
        }
    }

    return $items;
}

function submenu_get_children_ids($id, $items)
{
    $ids = wp_filter_object_list($items, array('menu_item_parent' => $id), 'and', 'ID');

    foreach ($ids as $id) {
        $ids = array_merge($ids, submenu_get_children_ids($id, $items));
    }

    return $ids;
}
