define(
	[
		'hbs!templates/layout',
		'marionette',
		'radio'
	],
	function (LayoutTemplate) {
		var PageLayout = Marionette.Layout.extend({
			className: 'main-content',
			template: LayoutTemplate
		});

		return PageLayout;
	}
);