define(
	[
		'marionette'
	],
	function () {
		'use strict';

		var BaseBodyView = Marionette.ItemView.extend({
			className: 'content',
			template: function () {
				return '';
			},

			initialize: function () {
				this.addAdditionalClassNames();
				this.addEventListeners();
			},

			addEventListeners: function () {
				// Stub
			},

			addAdditionalClassNames: function () {
				var classNames = Marionette.getOption(this, 'additionalClasses');

				if (!_.isUndefined(classNames)) {
					this.$el.addClass(classNames);
				}
			}
		});

		return BaseBodyView;
	}
);