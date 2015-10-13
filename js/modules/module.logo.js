define(
	[
		'marionette',
		'jquery'
	],
	function () {
		'use strict';

		/**
		 * Create logo view.
		 * @extend Marionette.ItemView
		 */
		var Logo = Marionette.ItemView.extend({
			id: 'logo',

			template: function () {
				return '';
			},

			triggers: {
				'click': 'logo:clicked' // Broadcast trigger when $el is clicked.
			}
		});

		return Logo;
	}
);