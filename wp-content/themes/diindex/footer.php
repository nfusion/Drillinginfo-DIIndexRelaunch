					<footer class="footer" role="contentinfo">
						<div id="footer-contact" class="footer-row text-center">
							<div class="row">
								<div class="large-12 medium-12 columns">
									<h4>Get In Touch With Us</h4>
										<div style="display:inline-block; margin:0 auto;">
											<div class="tel-selector">
												<label>
												  <select id="phoneNumbers">
												    <option value="tel:+18884777667,,1" data-display="+1 (888) 477-7667 ext. 1" selected="selected">US</option>
												    <option value="tel:+4401453793930" data-display="+44 (0) 1453-793-930">UK</option>
												    <option value="tel:+17133359049" data-display="+1 (713) 335-9049">Latin America</option>
												    <option value="tel:+14035407105" data-display="+1 (403) 540-7105">Canada</option>
												  </select>
												</label>
											</div>
											<div id="phoneDisplay" class="tel"><a href="tel://+18884777667,,1">+1 (888) 477-7667 ext. 1</a></div>
										</div>
									<p><a href="mailto:info@drillinginfo.com">info@drillinginfo.com</a></p>
		    					</div>
							</div>
						</div>
						<div id="inner-footer" class="footer-row">
							<div class="row">
								<div class="small-6 medium-4 columns">
									<p class="source-org copyright float-left">Copyright <?php echo date('Y'); ?><br />
									<small>All data and information is provided "As Is".</small></p>
								</div>
								<div class="medium-4 columns show-for-medium">
									<nav role="navigation" class="text-center">
			    						<?php joints_footer_links(); ?>
			    					</nav>
								</div>
								<div class="small-6 medium-4 columns">
									<nav role="navigation" class="float-right">
			    						<?php joints_social_links(); ?>
			    					</nav>
			    				</div>
							</div>
						</div> <!-- end #inner-footer -->
					</footer> <!-- end .footer -->
				</div>  <!-- end .main-content -->
			</div> <!-- end .off-canvas-wrapper-inner -->
		</div> <!-- end .off-canvas-wrapper -->
		<?php wp_footer(); ?>
	</body>
</html> <!-- end page -->