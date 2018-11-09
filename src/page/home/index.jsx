/*
* @Author: Rosen
* @Date:   2018-01-23 18:03:55
* @Last Modified by:   Rosen
* @Last Modified time: 2018-01-26 13:41:51
*/

import React from 'react';
import { Link } from 'react-router-dom';

import PageTitle from 'component/page-title/index.jsx';

import MUtil from 'util/mm.jsx';
import Statistic from 'service/user-statistic.jsx';
import './index.less';
import { Timeline } from 'zent';
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
			<Timeline className="layui-elem-quote" type="vertical">
				<Timeline.Item label="Time 1" />
				<Timeline.Item label="Time 2" tip="hello" />
				<Timeline.Item label="Time 3" />
				<Timeline.Item label="不显示圆点，自定义颜色" showDot={false} lineColor="red" />
				<Timeline.Item label="不显示标签" showLabel={false} />
				<Timeline.Item label="自定义圆点颜色" dotColor="#5197FF" />
				<Timeline.Item size={0} label="自定义长度" />
			</Timeline>
			</div>
		);
	}
}

export default Home;
