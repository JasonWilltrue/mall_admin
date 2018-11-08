import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';

import './index.less';

class SideNav extends Component {
	render() {
		return (
			<div className="navbar-default navbar-side">
				<div className="sidebar-collapse">
					<ul className="nav" id="main-menu">
						<li>
							<NavLink exact activeClassName="active-menu" to="/">
								<i className="fa fa-dashboard" /> 系统首页
							</NavLink>
						</li>
						<li>
							<Link to="/">
								<i className="fa fa-desktop" />商品管理
							</Link>
						</li>
						<li className="active">
							<Link to="/product">
								<i className="fa fa-sitemap" />商品
								<span className="fa arrow" />
							</Link>
							<ul className="nav nav-second-level collapse in">
								<li>
									<NavLink to="/product" activeClassName="active-menu">商品管理</NavLink>
								</li>
								<li>
								<NavLink to="/product-actegory" activeClassName="active-menu">品类管理</NavLink>
								</li>
							</ul>
						</li>
            <li className="active">
							<Link to="/order">
								<i className="fa fa-sitemap" />订单
								<span className="fa arrow" />
							</Link>
							<ul className="nav nav-second-level collapse in">
								<li>
                <NavLink to="/order" activeClassName="active-menu">订单管理</NavLink>
								</li>
							</ul>
						</li>
            <li>
							<NavLink to="/user" activeClassName="active-menu">
								<i className="fa fa-user" />用户管理
							</NavLink>
						</li>
						<li>
							<a href="empty.html">
								<i className="fa fa-fw fa-file" /> Empty Page
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default SideNav;
