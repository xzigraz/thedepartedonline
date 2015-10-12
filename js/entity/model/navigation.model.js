define(
	[
		'marionette'
	],
	function () {
		var NavigationModel = Backbone.Model.extend({
			defaults: {
				'displayName': 'Link Item',
				'url': '#'
			}
		});

		return NavigationModel;
	}
);