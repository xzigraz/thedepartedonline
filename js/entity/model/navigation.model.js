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
				'isHidden': false,
				'isSelectable': true,
				'isSelected': false,
				'url': '#'
			},

			/**
			 * Set the model's isSelected to true.
			 * @param options
			 */
			select: function (options) {
				options = options || {};

				this.set('isSelected', true, options);
			},

			/**
			 * Set the model's isSelected to false
			 * @param options
			 */
			deselect: function (options) {
				options = options || {};

				this.set('isSelected', false, options);
			},

			/**
			 * Find out if the model is selected or not.
			 * @returns {boolean}
			 */
			isSelected: function () {
				return this.get('isSelected');
			}
		});

		return NavigationModel;
	}
);