define(
	[
		'hbs!templates/layout',
		'marionette',
		'radio'
	],
	function (LayoutTemplate) {
		var Modules = Modules || {};

		Modules.PageLayout = Marionette.layout.extend({
			className: 'main-content',
			template: LayoutTemplate
		});

		return Modules;
	}
);