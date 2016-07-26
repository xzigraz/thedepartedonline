define(
	[
		'hbs!templates/homepage.message',
		'constant/navigation.items',
		'modules/module.layout',
		'modules/module.logo',
		'modules/module.navigation',
		'modules/module.body',
		'instafeed',
		'jquery'
	],
	function (homepageMessageTemplate, NavigationItems, PageLayout, LogoView, NavigationView, BaseBodyView, Instafeed) {
		'use strict';

		$(document).ready(function () {

			// Create logo view.
			var logo = new LogoView();

			// Create navigation view
			var navigation = new NavigationView({
				listItems: NavigationItems()
			});

			var homepageContent = new BaseBodyView({
				template: homepageMessageTemplate,
				additionalClasses: 'homepage'
			});

			// Create homepage, set logo and navigation as headerView.
			var homepage = new PageLayout({
				headerView: [logo, navigation],
				bodyView: homepageContent
			});

			var feed = new Instafeed({
				get: 'user',
				userId: '1353167671',
				clientId: '89fb02fc07594c0380261546ce3ba67b'
			});

			feed.run();

			// Render homepage view
			homepage.render();

			// Prepend homepage view to body.
			$('body').prepend(homepage.$el);

			navigation.setSelected('Home');
		});
	}
);