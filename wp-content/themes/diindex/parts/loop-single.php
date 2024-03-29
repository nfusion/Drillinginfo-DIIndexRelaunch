<article id="post-<?php the_ID(); ?>" <?php post_class(''); ?> itemscope itemtype="http://schema.org/BlogPosting">
						
	<header class="article-header">	
		<div class="h1">Perspectives</div>
		<h1 class="entry-title single-title h2" itemprop="headline"><?php the_title(); ?></h1>
    </header> <!-- end article header -->
					
    <section class="entry-content" itemprop="articleBody">
		<?php the_post_thumbnail('full'); ?>
		<?php the_content(); ?>
	</section> <!-- end article section -->
						
	<footer class="article-footer">
		<?php wp_link_pages(array('before' => '<div class="page-links">'.esc_html__('Pages:', 'jointswp'), 'after'  => '</div>')); ?>
		<p class="tags"><?php the_tags('<span class="tags-title">'.__('Tags:', 'jointswp').'</span> ', ', ', ''); ?></p>	
	</footer> <!-- end article footer -->
						
	<?php //comments_template();?>	
													
</article> <!-- end article -->