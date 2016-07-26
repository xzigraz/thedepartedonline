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

			modelEvents: {
				'change:isSelected': 'handleSelectionChange'
			},

			initialize: function () {
				this.updateSelectionClass();
			},

			/**
			 * Handles click event on the itemview.
			 * @param event
			 */
			handleClick: function (event) {
				event.preventDefault();
				var endPoint = this.model.get('url'),
					urlLocation = this.model.get('location'),
					url;

				if (urlLocation === 'external') {
					url = endPoint;
				} else {
					url = window.location.origin + '/' + endPoint + '.html';
				}

				window.location.href = url;
			},

			/**
			 * On model's isSelected attribute change, call updateSelectionClass.
			 */
			handleSelectionChange: function () {
				this.updateSelectionClass();
			},

			/**
			 * APIs
			 */

			/**
			 * Check to see if the model is selected or not.
			 * @returns {boolean}
			 */
			isSelected: function () {
				return this.model.isSelected();
			},

			/**
			 * Toggle selected class based on the value of isSelected attribute.
			 */
			updateSelectionClass: function () {
				this.$el.toggleClass('selected', this.isSelected());
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
			},

			/**
			 * APIs
			 */

			/**
			 * Set a navigation item to selected, delegate the event to collection.
			 * @method setSelected
			 * @param displayName
			 */
			setSelected: function (displayName) {
				this.collection.setSelected(displayName);
			}

		});

		return Navigation;
	}
);