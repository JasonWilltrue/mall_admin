/*
 * @Author: Jerrychan
 * @Date: 2018-11-08 15:16:57
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-11-08 15:19:15
 * @Description: 网页错误组件
 */

import React, { Component } from 'react';
import PageTitle from 'component/page-title/index.jsx';
import Pagination from 'util/pagination/index.jsx';
import { Link } from 'react-router-dom';

import MUtil from 'util/mm.jsx';
import User from 'service/user-service.jsx';

import './index.less';
import { Table, Notify } from 'zent';

const _mm = new MUtil();
const _user = new User();

const columns = [
	{
		title: 'ID',
		width: 50,
		bodyRender: data => {
			return <div>{data.id}</div>;
		},
	},
	{
		title: '用户名',
		name: 'username',
		width: 10,
	},
	{
		title: '邮箱',
		name: 'email',
		width: 20,
	},
	{
		title: '电话',
		name: 'phone',
		width: 20,
	},
	{
		title: '注册时间',
		name: 'createTime',
		width: 20,
	},
];

class UserList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading:false,
			page: {
				pageNum: 1, //当前
				pageSize: 10,
				totalItem: 0,
			},
			datasets: [],
			selectedRowKeys: [],
		};
	}

	componentDidMount() {
		this.loadUserList();
	}
	loadUserList() {
		_user.getUserList(this.state.pageNum).then(
			res => {
				console.log(res);
				this.setState({
					page: {
						pageSize: res.firstPage,
						totalItem: res.total,
					},
					datasets: res.list,
					selectedRowKeys: [],
				});
			},
			errMsg => {
				this.setState({
					list: [],
				});
				_mm.errorTips(errMsg);
			}
		);
	}
	onSelect(selectedRowKeys, selectedRows, currentRow) {
		if (selectedRowKeys.length) {
			Notify.success(JSON.stringify(selectedRowKeys));
		}

		this.setState({
			selectedRowKeys,
		});
	}

	getRowConf(rowData, index) {
		return {
			canSelect: index % 2 === 0,
		};
	}

	onChange(conf) {
		//页数
		console.log(conf);
		// setstate是异步函数 要在函数之后加回调函数
		this.setState(
			{
				pageNum: conf.current,
			},
			() => {
				this.loadUserList();
			}
		);
	}

	render() {
		let self = this;
		return (
			<div id="page-wrapper">
				<PageTitle title="用户列表" />
				<Table
				  loading={false}
					columns={columns}
					datasets={this.state.datasets}
					rowKey="item_id"
					getRowConf={this.getRowConf}
					pageInfo={this.state.page}
					onChange={conf => {
						this.onChange(conf);
					}}
					selection={{
						selectedRowKeys: this.state.selectedRowKeys,
						needCrossPage: true,
						onSelect: (selectedRowkeys, selectedRows, currentRow) => {
							self.onSelect(selectedRowkeys, selectedRows, currentRow);
						},
					}}
				/>
			</div>
		);
	}
}

export default UserList;
