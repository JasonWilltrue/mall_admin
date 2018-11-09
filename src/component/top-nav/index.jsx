import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MUtil from 'util/mm.jsx';
import User from 'service/user-service.jsx';
import './index.less';

const _mm = new MUtil();
const _user = new User();

class TopNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: _mm.getStorage('userInfo').username || '',
		};
		this.onLogout = this.onLogout.bind(this);
	}

	onLogout() {
		_user.logout().then(res =>{
			 _mm.removeStorage('userInfo');
			 window.location.href = '/login';  //这种跳转的弊端是重新渲染整个html
		},errMsg=>{
			 _mm.errorTips(errMsg);
		})
	}
	render() {
		return (
			<div className="navbar navbar-default top-navbar">
				<div className="navbar-header">
					<a className="navbar-brand" href="index.html">
						<b>ADMIN</b>
						MMall
					</a>
				</div>

				<ul className="nav navbar-top-links navbar-right">
					<li className="dropdown">
						<a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
							<i className="fa fa-bell fa-fw" /> <i className="fa fa-caret-down" />
						</a>
						<ul className="dropdown-menu dropdown-alerts">
							<li>
								<a href="#">
									<div>
										<i className="fa fa-comment fa-fw" /> New Comment
										<span className="pull-right text-muted small">4 min</span>
									</div>
								</a>
							</li>
							<li className="divider" />
							<li>
								<a href="#">
									<div>
										<i className="fa fa-twitter fa-fw" /> 3 New Followers
										<span className="pull-right text-muted small">12 min</span>
									</div>
								</a>
							</li>
							<li className="divider" />
							<li>
								<a href="#">
									<div>
										<i className="fa fa-envelope fa-fw" /> Message Sent
										<span className="pull-right text-muted small">4 min</span>
									</div>
								</a>
							</li>
							<li className="divider" />
							<li>
								<a href="#">
									<div>
										<i className="fa fa-tasks fa-fw" /> New Task
										<span className="pull-right text-muted small">4 min</span>
									</div>
								</a>
							</li>
							<li className="divider" />
							<li>
								<a href="#">
									<div>
										<i className="fa fa-upload fa-fw" /> Server Rebooted
										<span className="pull-right text-muted small">4 min</span>
									</div>
								</a>
							</li>
							<li className="divider" />
							<li>
								<a className="text-center" href="#">
									<strong>See All Alerts</strong>
									<i className="fa fa-angle-right" />
								</a>
							</li>
						</ul>
					</li>

					<li className="dropdown">
						<a className="dropdown-toggle" data-toggle="dropdown" href="javascript:;">
							<i className="fa fa-user fa-fw" />
							{
								this.state.username ? 
								<span>{this.state.username}</span>
								: <span>您未登录无法操作</span>
							}
							<i className="fa fa-caret-down" />
						</a>
						<ul className="dropdown-menu dropdown-user">
							<li>
								<a href="#">
									<i className="fa fa-user fa-fw" />
									用户中心
								</a>
							</li>
							<li>
								<a href="#">
									<i className="fa fa-gear fa-fw" />
									系统设置
								</a>
							</li>
							<li className="divider" />
							<li>
								<span onClick={this.onLogout}>
									<i className="fa fa-sign-out fa-fw" />
									退出
								</span>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		);
	}
}

export default TopNav;
