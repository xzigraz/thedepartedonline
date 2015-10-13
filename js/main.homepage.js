define(
	[
		'modules/module.layout',
		'modules/module.logo',
		'modules/module.navigation',
		'jquery'
	],
	function (PageLayout, Logo, Navigation) {
		'use strict';

		$(document).ready(function () {

			// Create logo view.
			var logo = new Logo();

			// Create navigation view
			var navigation = new Navigation({
				listItems: [
					{
						'displayName': 'Home'
					},
					{
						'displayName': 'Portfolio'
					},
					{
						'displayName': 'Resume'
					},
					{
						'displayName': 'Blog'
					},
					{
						'displayName': 'Contact'
					}
				]
			});

			// Create homepage, set logo and navigation as headerView.
			var homepage = new PageLayout({
				headerView: [logo, navigation]
			});

			// Render homepage view
			homepage.render();

			// Prepend homepage view to body.
			$('body').prepend(homepage.$el);
		});
	}
);