import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import './index.less';

class HelloMessage extends Component {
	render() {
		return (
			<div>
				Hello {this.props.name}
				<i className="fa fa-address-book" />
				<span className="icon" >123</span>
			</div>
		);
	}
}

// 加载组件到 DOM 元素 mountNode
ReactDOM.render(<HelloMessage name="John" />, document.getElementById('app'));
