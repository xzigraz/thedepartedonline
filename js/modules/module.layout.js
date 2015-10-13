define(
	[
		'hbs!templates/layout',
		'modules/module.header',
		'modules/module.navigation',
		'marionette',
		'radio'
	],
	function (LayoutTemplate, PageHeader) {
		'use strict';

		/**
		 * Setup the layout for the entire site. Declare three regions since that's all we really needed.
		 * @extend Marionette.Layout
		 */
		var PageLayout = Marionette.Layout.extend({
			className: 'main-content',
			template: LayoutTemplate,

			regions: {
				header: '#header',
				body: '#body',
				footer: '#footer'
			},

			/**
			 * On initialization, get header.
			 */
			initialize: function () {
				this.getHeader();
			},

			/**
			 * On render, show the pageHeader
			 */
			onRender: function () {
				this.header.show(this.pageHeader);
			},

			/**
			 * Get the headerView and construct a new PageHeader view.
			 */
			getHeader: function () {
				var self = this,
					headerView = Marionette.getOption(self, 'headerView');

				if (headerView.length) {
					this.pageHeader = new PageHeader({
						headerView: headerView
					})
				}
			}
		});

		return PageLayout;
	}
);