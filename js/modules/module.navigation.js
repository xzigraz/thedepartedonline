define(
	[
		'hbs!templates/navigation.template',
		'marionette',
		'jquery'
	],
	function (NavigationTemplate) {
		var NavigationItemView = Marionette.ItemView.extend({
			tagName: 'li',
			template: function () {
				return '';
			},
			events: {
				'click': 'handleClick'
			},
			handleClick: function () {
				console.log('click click');
			}
		});

		var Navigation = Marionette.CompositeView.extend({
			id: 'navigation-container',
			template: NavigationTemplate,
			itemView: NavigationItemView
		});

		return Navigation;
	}
);