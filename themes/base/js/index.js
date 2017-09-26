'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TranslateTab from './components/TranslateTab/TranslateTab';

import isMobile from './utils/isMobile';

window.addEventListener('DOMContentLoaded', function() {
	let mobileMenu = document.querySelector('.js-mobile-menu');

	if (mobileMenu && isMobile) {
		mobileMenu.addEventListener('click', function(e) {
			document.querySelector('.main__menu').classList.toggle('main__menu--show');
		});
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
