define(
	[
		'hbs!templates/layout',
		'modules/module.header',
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
				header: '#page-header',
				body: '#page-body',
				footer: '#page-footer'
			},

			/**
			 * On initialization, get header.
			 */
			initialize: function () {
				this.getHeader();
				this.getBody();
				this.createFooter();
			},

			/**
			 * On render, show the pageHeader
			 */
			onRender: function () {
				this.header.show(this.pageHeader);
				this.body.show(this.pageBody);
				this.footer.show(this.pageFooter);
			},

			/**
			 * Get the headerView and construct a new PageHeader view.
			 */
			getHeader: function () {
				var headerView = Marionette.getOption(this, 'headerView');

				if (headerView.length) {
					this.pageHeader = new PageHeader({
						headerView: headerView
					});
				} else {
					this.pageHeader = new Marionette.ItemView({
						template: function () {
							return 'Something went wrong. Header view has some errors.';
						}
					})
				}
			},

			getBody: function () {
				var bodyView = Marionette.getOption(this, 'bodyView');

				if (bodyView instanceof Marionette.View) {
					this.pageBody = bodyView;
				} else {
					this.pageBody = new Marionette.ItemView({
						template: function () {
							return 'Well, this is embarrassing, there\'s no content on this page.';
						}
					});
				}
			},

			createFooter: function () {
				var footerView = Marionette.getOption(this, 'footerView');

				if (footerView instanceof Marionette.View) {
					this.pageFooter = footerView;
				} else {
					this.pageFooter = new Marionette.ItemView({
						tagName: 'span',
						template: function () {
							return '&copy; The Departed Online.';
						}
					});
				}
			}
		});

		return PageLayout;
	}
);