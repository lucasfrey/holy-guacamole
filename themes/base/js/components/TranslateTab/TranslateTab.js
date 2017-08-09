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
		};
	}

	componentDidMount() {
		this.updateHeight();
	}

	componentDidUpdate() {
		var allContent = document.querySelectorAll('.translate__content');

		this.updateHeight();

		for (let i = 0; i < allContent.length; i++) {
			allContent[i].classList.remove('translate__content--active');
		}

		let choosenLang = document.querySelector('.lang-' + this.state.lang);

		choosenLang.classList.add('translate__content--active');
	}

	render() {
		return (
			<div>
				{this.renderTabs()}
				{this.renderContent()}
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
		return (
			<span className="translate__tabs">
				{this.renderTab('EN')}
				{this.renderTab('FR')}
			</span>
		);
	}

	renderTab(lang) {
		let tabClasses = lang === this.state.lang ? 'translate__tab translate__tab--active' : 'translate__tab';

		return (
			<a className={tabClasses} onClick={this.handleChangeLanguage.bind(this, lang)}>{lang}</a>
		);
	}

	handleChangeLanguage = (lang) => {
		this.setState({
			lang: lang
		});
	}

	updateHeight() {
		let height = document.querySelector('.lang-' + this.state.lang).offsetHeight + 45;
		document.querySelector('.translate__holder').style.height = height + 'px';
	}
}

export default TranslateTab;
