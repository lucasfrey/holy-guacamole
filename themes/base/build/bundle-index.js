webpackJsonp([1],{

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(81);
module.exports = __webpack_require__(80);


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener('DOMContentLoaded', function () {

	// Lazy load images
	window.onload = function () {
		var placeholder = document.querySelectorAll('.placeholder');

		placeholder.forEach(function (image, i) {
			var small = image.querySelector('.img-small');

			// 1: load small image and show it
			var img = new Image();
			img.src = small.src;
			img.onload = function () {
				small.classList.add('loaded');
			};

			// 2: load large image
			var imgLarge = new Image();
			imgLarge.src = image.dataset.large;
			imgLarge.onload = function () {
				imgLarge.classList.add('loaded');
				imgLarge.classList.add('column__image');
			};
			image.appendChild(imgLarge);
		});
	};
});

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[181]);
//# sourceMappingURL=bundle-index.js.map