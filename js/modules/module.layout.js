define(
	[
		'hbs!templates/layout',
		'modules/module.header',
		'modules/module.navigation',
		'marionette',
		'radio'
	],
	function (LayoutTemplate, PageHeader) {
		var PageLayout = Marionette.Layout.extend({
			className: 'main-content',
			template: LayoutTemplate,
			regions: {
				header: '#header',
				body: '#body',
				footer: '#footer'
			},
			initialize: function () {
				this.getHeader();
			},
			onRender: function () {
				this.header.show(this.pageHeader);
			},
			getHeader: function () {
				var self = this;
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