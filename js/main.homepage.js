define(
	[
		'modules/module.layout',
		'modules/module.logo',
		'jquery'
	],
	function (PageLayout, Logo) {
		'use strict';

		$(document).ready(function () {

			var logo = new Logo();

			var homepage = new PageLayout({
				headerView: [logo]
			});

			homepage.render();

			$('body').prepend(homepage.$el);
		});
	}
);