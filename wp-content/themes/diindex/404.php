<?php get_header(); ?>
			
	<div id="content">

		<div id="inner-content" class="row">
	
			<main id="main" class="large-8 medium-8 columns" role="main">

				<article id="content-not-found">
				
					<header class="article-header">
						<h1><?php _e('404 - Article Not Found', 'jointswp'); ?></h1>
					</header> <!-- end article header -->
			
					<section class="entry-content">
						<p><?php _e('The content you were looking for was not found.', 'jointswp'); ?></p>
					</section> <!-- end article section -->

					<section class="search">
					    <p><?php //get_search_form();?></p>
					</section> <!-- end search section -->
			
				</article> <!-- end article -->
	
			</main> <!-- end #main -->

		</div> <!-- end #inner-content -->

	</div> <!-- end #content -->

<?php get_footer(); ?>