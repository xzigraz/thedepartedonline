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

			events: {
				'click': 'handleClick'
			},

			handleClick: function () {
				window.location.href = 'http://www.thedepartedonline.com';
			}
		});

		return Logo;
	}
);