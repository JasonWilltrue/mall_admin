/*
* @Author: Rosen
* @Date:   2018-01-23 18:03:55
* @Last Modified by:   Rosen
* @Last Modified time: 2018-01-26 13:41:51
*/

import React from 'react';
import { Link } from 'react-router-dom';

// import MUtil        from 'util/mm.jsx'
// import Statistic    from 'service/statistic-service.jsx'

// const _mm           = new MUtil();
// const _statistic    = new Statistic();

import PageTitle from 'component/page-title/index.jsx';

import MUtil from 'util/mm.jsx';
import Statistic from 'service/user-statistic.jsx';
import './index.less';

const _mm = new MUtil();
const _statistic = new Statistic();


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userCount: '-',
			productCount: '-',
			orderCount: '-',
		};
	}
	componentDidMount() {
		this.loadCount();
	}
	loadCount() {
		_statistic.getHomeCount().then(res => {
		    this.setState(res);
		}, errMsg => {
		    _mm.errorTips(errMsg);
		});
	}
	render() {
		return (
			<div id="page-wrapper">
				<PageTitle title="首页" />
				<div className="row">
					<div className="col-md-4">
						<Link to="/user" className="color-box brown">
							<p className="count">{this.state.userCount}</p>
							<p className="desc">
								<i className="fa fa-user-o" />
								<span>用户总数</span>
							</p>
						</Link>
					</div>
					<div className="col-md-4">
						<Link to="/product" className="color-box green">
							<p className="count">{this.state.productCount}</p>
							<p className="desc">
								<i className="fa fa-list" />
								<span>商品总数</span>
							</p>
						</Link>
					</div>
					<div className="col-md-4">
						<Link to="/order" className="color-box blue">
							<p className="count">{this.state.orderCount}</p>
							<p className="desc">
								<i className="fa fa-check-square-o" />
								<span>订单总数</span>
							</p>
						</Link>
					</div>
				</div>
                <blockquote className="layui-elem-quote">更新日志</blockquote>
				<div className="layui-timeline_layout">
					<ul className="layui-timeline">
						<li className="layui-timeline-item">
							<i className="layui-icon layui-timeline-axis">&#xe63f;</i>
							<div className="layui-timeline-content layui-text">
								<h3 className="layui-timeline-title">8月18日</h3>
								<p>layui 2.0 的一切准备工作似乎都已到位。发布之弦，一触即发。</p>
							</div>
						</li>
						<li className="layui-timeline-item">
							<i className="layui-icon layui-timeline-axis">&#xe63f;</i>
							<div className="layui-timeline-content layui-text">
								<h3 className="layui-timeline-title">8月16日</h3>
								<p>
									杜甫的思想核心是儒家的仁政思想，他有“
									<em>致君尧舜上，再使风俗淳</em>
									”的宏伟抱负。个人最爱的名篇有：
								</p>
								<ul>
									<li>《登高》</li>
									<li>《茅屋为秋风所破歌》</li>
								</ul>
							</div>
						</li>
						<li className="layui-timeline-item">
							<i className="layui-icon layui-timeline-axis">&#xe63f;</i>
							<div className="layui-timeline-content layui-text">
								<h3 className="layui-timeline-title">8月16日</h3>
								<p>
									杜甫的思想核心是儒家的仁政思想，他有“
									<em>致君尧舜上，再使风俗淳</em>
									”的宏伟抱负。个人最爱的名篇有：
								</p>
							</div>
						</li>
                        <li className="layui-timeline-item">
							<i className="layui-icon layui-timeline-axis">&#xe63f;</i>
							<div className="layui-timeline-content layui-text">
								<h3 className="layui-timeline-title">8月16日</h3>
								<p>
									杜甫的思想核心是儒家的仁政思想，他有“
									<em>致君尧舜上，再使风俗淳</em>
									”的宏伟抱负。个人最爱的名篇有：
								</p>
							</div>
						</li>
                        <li className="layui-timeline-item">
							<i className="layui-icon layui-timeline-axis">&#xe63f;</i>
							<div className="layui-timeline-content layui-text">
								<h3 className="layui-timeline-title">8月16日</h3>
								<p>
									杜甫的思想核心是儒家的仁政思想，他有“
									<em>致君尧舜上，再使风俗淳</em>
									”的宏伟抱负。个人最爱的名篇有：
								</p>
							</div>
						</li>
						<li className="layui-timeline-item">
							<i className="layui-icon layui-timeline-axis">&#xe63f;</i>
							<div className="layui-timeline-content layui-text">
								<div className="layui-timeline-title">过去</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Home;
