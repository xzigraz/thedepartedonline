define(
	[
		'constant/navigation.items',
		'modules/module.layout',
		'modules/module.logo',
		'modules/module.navigation'
	],
	function (NavigationItems, PageLayout, LogoView, NavigationView) {
		'use strict';

		$(document).ready(function () {

			// Create logo view.
			var logo = new LogoView();

			// Create navigation view
			var navigation = new NavigationView({
				listItems: NavigationItems()
			});

			// Create homepage, set logo and navigation as headerView.
			var homepage = new PageLayout({
				headerView: [logo, navigation]
			});

			// Render homepage view
			homepage.render();

			// Prepend homepage view to body.
			$('body').prepend(homepage.$el);

			navigation.setSelected('Portfolio');
		});
	}
);