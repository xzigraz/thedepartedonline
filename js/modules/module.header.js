define(
	[
		'marionette',
		'underscore',
		'jquery'
	],
	function () {
		'use strict';

		/**
		 * Create header view
		 * @extend Marionette.CompositeView
		 */
		var PageHeader = Marionette.CollectionView.extend({
			/**
			 * On initialization, set the headerView, the headerView is defined in option. It can be empty.
			 */
			initialize: function () {
				this.headerView = Marionette.getOption(this, 'headerView') || [];
			},

			/**
			 * On render, if the headerView has more than 0 items, then we will render it.
			 */
			onRender: function () {
				if (this.headerView.length) {
					this.renderViews(this.headerView);
				}
			},

			/**
			 * Render all views in the headerView array.
			 * @param views
			 */
			renderViews: function (views) {
				var self = this;

				_.each(views, function (view) {
					self.renderView(view);
				});
			},

			/**
			 * Render individual view from the headerView array and append the view to $el.
			 * @param view
			 */
			renderView: function (view) {
				var self = this;

				if (view instanceof Backbone.View) {
					view.render();

					self.$el.append(view.$el);
				}
			},

			/**
			 * Add view to the headerView, in case we do need to add more views to the header after we loaded the page.
			 * @method addView
			 * @param view
			 */
			addView: function (view) {
				this.headerView.push(view);
				this.renderView(view);
			}
		});

		return PageHeader;
	}
);