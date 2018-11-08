/*
 * @Author: Jerrychan
 * @Date: 2018-11-08 15:00:16
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-11-08 15:00:41
 * @Description: 入口文件
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';

import Home from 'page/home/index.jsx';
import Login from 'page/login/index.jsx';
import Layout from 'component/layout/index.jsx';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/" render={props => {
             	<Layout>
							 <Switch>
								 <Route exact path="/" component={Home} />
								 <Redirect from="." to="/" />
							 </Switch>
						 </Layout>
					}} />
				</Switch>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
