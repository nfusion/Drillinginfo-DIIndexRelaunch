<!-- By default, this menu will use off-canvas for small
	 and a topbar for medium-up -->

<div class="top-bar" id="top-bar-menu">
	<div class="top-bar-left float-left">
		<ul class="menu">
			<li><a href="<?php echo home_url(); ?>" class="site-name"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/drillinginfo-logo.png" alt="<?php bloginfo('name'); ?>"></a></li>
		</ul>
	</div>
	<div class="top-bar-right show-for-medium">
		<?php joints_top_nav(); ?>	
	</div>
	<div class="top-bar-right float-right show-for-small-only">
		<ul class="menu">
			<li><button class="menu-icon" type="button" data-toggle="off-canvas"></button></li>
			<!--li><a data-toggle="off-canvas"><i class="fi-list"></i><?php _e('Menu', 'jointswp'); ?></a></li-->
		</ul>
	</div>
</div>
<div id="site-nav-menu" class="clearfix site-nav-bar show-for-medium">
	<div class="float-left site-meta">
		<h3><?php echo get_bloginfo('name'); ?>:</h3>
		<p><?php echo get_bloginfo('description'); ?></p>
	</div>
	<div class="float-right">
	<?php 
        $args = array(
        'menu'    => 'Primary Navigation',
        'submenu' => 'DI Index',
    );

    wp_nav_menu($args);
    ?>
</div>
</div>