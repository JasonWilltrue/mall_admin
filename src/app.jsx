/*
 * @Author: Jerrychan
 * @Date: 2018-11-08 15:00:16
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-11-14 19:32:28
 * @Description: 入口文件
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';
import 'zent/css/index.css';
import Home from 'page/home/index.jsx';
import Login from 'page/login/index.jsx';
import Layout from 'component/layout/index.jsx';
import User from 'page/user/index.jsx';
import Error from 'page/error/index.jsx';
import ProductRouter from 'page/product/router.jsx';
class App extends Component {
	render() {
		let LayoutRouter = (
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route  path="/user" component={User} />
					<Route  path="/product" component={ProductRouter} />
					{/* <Route  path="/product/index" component={Product} />
					<Redirect exact from="./product" to="./product/index"/> */}
					<Route component={Error}/>
				</Switch>
			</Layout>
		);
		return (
			<Router>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/" render={ props => LayoutRouter}/>
				</Switch>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
