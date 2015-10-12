define(
	[
		'marionette',
		'jquery'
	],
	function () {
		var Logo = Marionette.ItemView.extend({
			id: 'logo',
			template: function () {
				return '';
			},
			triggers: {
				'click': 'logo:clicked'
			}
		});

		return Logo;
	}
);