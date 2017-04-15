'use strict';

import React, {Component} from 'react';
import './loader.less';

class Loader extends Component {
	render() {
		return (<div className="loader" />);
	}

	static styleguide = {
		options: [
			{
				'.loader': 'Default loader styles'
			},
			{
				'.loader--small': 'Small loader styles'
			}
		],
		category: 'components.loader'
	};
}

export default Loader;
