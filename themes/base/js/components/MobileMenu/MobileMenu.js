'use strict';

import React, { Component } from 'react';
import Tappable from 'react-tappable';
import classNames from 'classnames';

/**
 * MobileMenu
 *
 * A mobile menu component
 *
 * @class MobileMenu
 */
class MobileMenu extends Component {
	constructor() {
		super();
		this.state = {
			isOpen: false
		};
	}
	static propTypes = {
		data: React.PropTypes.array
	};

	static defaultProps = {
		data: [
			{
				'title': 'Home',
				'link': '\/'
			},
			{
				'title': 'About',
				'link': '\/about\/'
			},
			{
				'title': 'Contact',
				'link': '\/contact\/'
			}
		]
	};

	render() {
		return (
			<div className="n">
				{this.renderNavToggle()}
				{this.state.isOpen ? this.renderMenu() : null}
			</div>
		);
	}

	renderMenu() {
		return (
			<nav className="nav nav--mobile">
				<ul className="nav__menu">
					{this.renderMenuItems()}
				</ul>
			</nav>
		);
	}

	renderMenuItems() {
		return this.props.data.map((item, index) => {
			let linkClasses = classNames({
				'nav__item': true,
				'nav__item--current': item.link === window.location.pathname
			});

			return (
				<li key={index} accessKey={index + 1}>
					<Tappable component="a" className={linkClasses} href={item.link}>
						{item.title}
					</Tappable>
				</li>
			);
		});
	}

	renderNavToggle() {
		return (
			<span onClick={this.handleToggle}>
				x
			</span>
		);
	}

	handleToggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
}

export default MobileMenu;
