define(
	[
		'hbs!templates/navigation.template',
		'hbs!templates/navigation.item.template',
		'entity/collection/navigation.collection',
		'marionette',
		'jquery'
	],
	function (NavigationTemplate, NavigationItemTemplate, NavigationCollection) {
		'use strict';

		/**
		 * Navigation item view, provide basic click handler.
		 * @extend Marionette.ItemView
		 */
		var NavigationItemView = Marionette.ItemView.extend({
			tagName: 'li',
			template: NavigationItemTemplate,

			events: {
				'click': 'handleClick'
			},

			/**
			 * Handles click event on the itemview.
			 * @param event
			 */
			handleClick: function (event) {
				event.preventDefault();
				console.log('click click');
			}
		});

		/**
		 * Navigation list view, using compositeview so that I can use template.
		 * @extend Marionette.CompositeView
		 */
		var Navigation = Marionette.CompositeView.extend({
			id: 'navigation-container',
			template: NavigationTemplate,
			itemViewContainer: 'ul.navigation',
			itemView: NavigationItemView,

			/**
			 * On initialize, get the collection. Add event listeners.
			 */
			initialize: function () {
				this.collection = this.getListItems();
				this.addEventListeners();
			},

			/**
			 * Group all event listeners here.
			 */
			addEventListeners: function () {

			},

			/**
			 * Get list items, we are expecting the data come in be a navigation collection, or backbone collection or
			 * an array, or empty. Handle all these use cases so that the code won't break no matter the circumstances.
			 * @returns {NavigationCollection|*|listItems}
			 */
			getListItems: function () {
				var listItems = Marionette.getOption(this, 'listItems');

				if (!this.listItems) {
					if (listItems instanceof NavigationCollection) {
						this.listItems = listItems;
					} else if (listItems instanceof Backbone.Collection) {
						this.listItems = new NavigationCollection(listItems.toJSON());
					} else if (_.isArray(listItems)) {
						this.listItems = new NavigationCollection(listItems);
					} else {
						this.listItems = new NavigationCollection([]);
					}
				}

				return this.listItems;
			}
		});

		return Navigation;
	}
);