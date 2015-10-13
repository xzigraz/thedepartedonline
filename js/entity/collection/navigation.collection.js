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
			model: NavigationModel
		});

		return NavigationCollection;
	}
);