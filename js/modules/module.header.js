define(
	[
		'marionette',
		'underscore',
		'jquery'
	],
	function () {
		var PageHeader = Marionette.CompositeView.extend({
			template: function () {
				return '';
			},
			initialize: function () {
				this.headerView = Marionette.getOption(this, 'headerView') || [];
			},
			onRender: function () {
				if (this.headerView.length) {
					this.renderViews(this.headerView);
				}
			},
			renderViews: function (views) {
				var self = this;

				_.each(views, function (view) {
					self.renderView(view);
				});
			},
			renderView: function (view) {
				var self = this;

				if (view instanceof Backbone.View) {
					view.render();

					self.$el.append(view.$el);
				}
			},
			addView: function (view) {
				this.headerView.push(view);
				this.renderView(view);
			}
		});

		return PageHeader;
	}
);