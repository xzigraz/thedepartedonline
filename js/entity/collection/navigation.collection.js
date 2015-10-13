define(
	[
		'entity/model/navigation.model',
		'marionette'
	],
	function (NavigationModel) {
		'use strict';

		/**
		 * Extend backbone collection, use the navigation model as the model for the collection.
		 * @extend Backbone.Collection
		 */
		var NavigationCollection = Backbone.Collection.extend({
			model: NavigationModel,

			/**
			 * Set the model in a collection to selected
			 * @param displayName
			 */
			setSelected: function (displayName, options) {
				options = options || {};

				var model = this.findModelByAttribute({'displayName': displayName});

				model.select(options);
			},

			/**
			 * Find model by attribute value.
			 * @param value
			 */
			findModelByAttribute: function (value) {
				return this.findWhere(value);
			}
		});

		return NavigationCollection;
	}
);