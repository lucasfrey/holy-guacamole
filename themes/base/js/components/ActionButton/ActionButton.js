'use strict';

import React, {Component} from 'react';
import IconSave from '../../../icons/save.svg';
import './actionButton.less';

/**
 * ActionButton
 *
 * A call to action button component
 *
 * @class ActionButton
 */
class ActionButton extends Component {
	static propTypes = {
		title: React.PropTypes.string
	};

	render() {
		return (
			<button
				className="button button--action"
				onClick={this.handleClick}>
				{this.props.title}
				<IconSave height={12} />
			</button>
		);
	}

	handleClick = () => {
		console.log('clicked');
	}
}

export default ActionButton;
