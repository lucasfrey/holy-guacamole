'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './translateTab.less';

/**
 * TranslateTab
 *
 * A translation component
 *
 * @class TranslateTab
 */
class TranslateTab extends Component {
	static propTypes = {
		children: PropTypes.string
	};

	constructor() {
		super();

		this.state = {
			lang: 'EN'
		}
	}

	componentDidUpdate() {
		var allContent = document.querySelectorAll('.translate__content');

		for (let i = 0; i < allContent.length; i++) {
			// console.log(allContent[1].classList);
			allContent[i].classList.remove('translate__content--active');
		}

		let choosenLang = document.querySelector('.lang-' + this.state.lang);

		choosenLang.classList.add('translate__content--active');
	}

	render() {
		return (
			<div>
				{this.renderTabs()}
				<div className="translate__content">
					{this.renderContent()}
				</div>
			</div>
		);
	}

	renderContent() {
		let {children} = this.props;

		return (
			<div dangerouslySetInnerHTML={{__html: children}} />
		);
	}

	renderTabs() {
		let tabClasses = "translate__tab";
		return (
			<span className="translate__tabs">
				<a className="translate__tab" onClick={this.handleChangeLanguage.bind(this, 'EN')}>EN</a>
				<a className="translate__tab" onClick={this.handleChangeLanguage.bind(this, 'FR')}>FR</a>
			</span>
		);
	}

	handleChangeLanguage = (lang) => {
		this.setState({
			lang: lang
		})
	}
}

export default TranslateTab;
