define(
	[
		'modules/module.layout',
		'jquery'
	],
	function (PageLayout) {
		'use strict';

		$(document).ready(function () {
			var homepage = new PageLayout();

			homepage.render();

			$('body').prepend(homepage.$el);
		});
	}
);