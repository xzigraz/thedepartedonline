define(
	[
		'marionette'
	],
	function () {
		'use strict';

		/**
		 * Extend backbone model and add defaults
		 * @extend Backbone.Model
		 */
		var NavigationModel = Backbone.Model.extend({
			defaults:  {
				'displayName': 'Link Item',
				'isDisabled': false,
				'isSelectable': true,
				'isHidden': false,
				'url': '#'
			}
		});

		return NavigationModel;
	}
);