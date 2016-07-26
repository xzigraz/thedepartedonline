define(
	[
		'marionette'
	],
	function () {
		'use strict';

		var FeedModel = Backbone.Model.extend({
			url: '/thedepartedonline/data/feed.xml',
			fetch: function (options) {
				options = options || {};
				options.dataType = "xml";
				return Backbone.Model.prototype.fetch.call(this, options);
			}
		});

		return FeedModel;
	}
);