define(
	[
		'hbs!templates/resume',
		'constant/navigation.items',
		'modules/module.layout',
		'modules/module.logo',
		'modules/module.navigation',
		'modules/module.body'
	],
	function (resumeTemplate, NavigationItems, PageLayout, LogoView, NavigationView, BaseBodyView) {
		'use strict';

		$(document).ready(function () {

			// Create logo view.
			var logo = new LogoView();

			// Create navigation view
			var navigation = new NavigationView({
				listItems: NavigationItems()
			});

			var resumeContent = new BaseBodyView({
				template: resumeTemplate,
				additionalClasses: 'resume'
			});

			// Create homepage, set logo and navigation as headerView.
			var homepage = new PageLayout({
				headerView: [logo, navigation],
				bodyView: resumeContent
			});

			// Render homepage view
			homepage.render();

			// Prepend homepage view to body.
			$('body').prepend(homepage.$el);

			navigation.setSelected('Resume');
		});
	}
);