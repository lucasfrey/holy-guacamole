'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import MobileMenu from './components/MobileMenu/MobileMenu';
import TranslateTab from './components/TranslateTab/TranslateTab';

import isMobile from './utils/isMobile';

window.addEventListener('DOMContentLoaded', function() {
	let mobileHolder = document.querySelector('[data-mobile-menu]');

	if (isMobile() && mobileHolder) {
		ReactDOM.render(
			<MobileMenu />, mobileHolder
		);
	}

	let translateTabs = document.querySelector('.js-translate-tabs');

	if (translateTabs) {
		ReactDOM.render(
			<TranslateTab>
				{translateTabs.innerHTML}
			</TranslateTab>
			, translateTabs
		);
	}
});
