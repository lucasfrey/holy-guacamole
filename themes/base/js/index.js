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

	// TRANSLATE TABS
	let translateTabs = document.querySelector('.js-translate-tabs');

	if (translateTabs) {
		ReactDOM.render(
			<TranslateTab>
				{translateTabs.innerHTML}
			</TranslateTab>
			, translateTabs
		);
	}

	// start
	let pItem = document.getElementsByClassName('progressive replace');
	let timer;

	window.addEventListener('scroll', scroller, false);
	window.addEventListener('resize', scroller, false);
	inView();

	// throttled scroll/resize
	function scroller(e) {
		timer = timer || setTimeout(function() {
			timer = null;
			requestAnimationFrame(inView);
		}, 300);
	}

	// image in view?
	function inView() {
		let wT = window.pageYOffset;
		let wB = wT + window.innerHeight;
		let cRect;
		let pT;
		let pB;
		let p = 0;

		while (p < pItem.length) {
			cRect = pItem[p].getBoundingClientRect();
			pT = wT + cRect.top;
			pB = pT + cRect.height;
			if (wT < pB && wB > pT) {
				loadFullImage(pItem[p]);
				pItem[p].classList.remove('replace');
			}
			else p++;
		}
	}

	// replace with full image
	function loadFullImage(item) {
		if (!item || !item.href) return;
		// load image
		let img = new Image();
		if (item.dataset) {
			img.srcset = item.dataset.srcset || '';
			img.sizes = item.dataset.sizes || '';
		}
		img.src = item.href;
		img.className = 'reveal column__image';
		if (img.complete) addImg();
		else img.onload = addImg;

		// replace image
		function addImg() {
			// add full image
			item.appendChild(img).addEventListener('animationend', function(e) {
				// remove preview image
				var pImg = item.querySelector && item.querySelector('img.preview');
				if (pImg) {
					e.target.alt = pImg.alt || '';
					item.removeChild(pImg);
					e.target.classList.remove('reveal');
				}
			});
		}
	}
});
