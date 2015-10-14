define(
	[],
	function () {
		'use strict';

		var NavigationItems = function () {
			return [
				{
					'displayName': 'Home',
					'url': 'index',
					'location': 'internal'
				},
				{
					'displayName': 'Portfolio',
					'url': 'portfolio',
					'location': 'internal'
				},
				{
					'displayName': 'Resume',
					'url': 'resume',
					'location': 'internal'
				},
				{
					'displayName': 'Blog',
					'url': 'http://deathtobunnies.thedepartedonline.com/',
					'location': 'external'
				},
				{
					'displayName': 'Contact',
					'url': 'contact',
					'location': 'internal'
				}
			];
		};

		return NavigationItems;
	}
);