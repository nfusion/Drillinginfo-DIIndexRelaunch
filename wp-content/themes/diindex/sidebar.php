<div id="sidebar1" class="sidebar large-2 medium-3 columns" role="complementary">
	<?php if (is_active_sidebar('sidebar1')) : ?>

		<?php dynamic_sidebar('sidebar1'); ?>

	<?php else : ?>

	<!-- This content shows up if there are no widgets defined in the backend. -->
						
	<div class="alert help">
		<p><?php _e('Please activate some Widgets.', 'jointswp'); ?></p>
	</div>

	<?php endif; ?>

</div>