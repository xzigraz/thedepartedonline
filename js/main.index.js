define(
	[
		'pages/home',
		'jquery'
	],
	function (HomeLayout) {
		'use strict';

		$(document).ready(function () {
			var homepage = new HomeLayout.index();

			homepage.render();

			$('body').prepend(homepage.$el);
		});
	}
);