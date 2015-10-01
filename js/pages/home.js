define(
	[
		'hbs!templates/layout',
		'marionette',
		'radio'
	],
	function (LayoutTemplate) {
		var Homepage = Homepage || {};

		Homepage.index = Marionette.Layout.extend({
			className: 'main-content',
			template: LayoutTemplate
		});

		return Homepage;
	}
);