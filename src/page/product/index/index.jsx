/*
 * @Author: Jerrychan
 * @Date: 2018-11-10 15:15:48
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-11-10 23:35:58
 * @Description: 商品列表
 */

import React from 'react';
import { Link } from 'react-router-dom';
import MUtil from 'util/mm.jsx';
import User from 'service/product-service.jsx';

import PageTitle from 'component/page-title/index.jsx';
import TableList from 'util/table-list/index.jsx';
import Pagination from 'util/pagination/index.jsx';

const _mm = new MUtil();
const _user = new User();

class ProductList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			pageNum: 1,
		};
	}
	componentDidMount() {
		this.loadUserList();
	}
	loadUserList() {
		_user
			.getProductList({
				listType: 'list',
				pageNum: this.state.pageNum,
			})
			.then(
				res => {
					console.log(res);
					this.setState(res);
				},
				errMsg => {
					this.setState({
						list: [],
					});
					_mm.errorTips(errMsg);
				}
			);
	}
	// 页数发生变化的时候
	onPageNumChange(pageNum) {
		// setstate是异步函数 要在函数之后加回调函数
		this.setState(
			{
				pageNum: pageNum,
			},
			() => {
				this.loadUserList();
			}
		);
	}
	onSetProductStatus(e, currentStatus) {
		let newStatus = currentStatus == 1 ? 2 : 1;
		let tips = currentStatus == 1 ? '商品下架' : '商品上架';
		if (window.confirm(tips)) {
			_product
				.setProductStatus({
					productId: productId,
					status: newStatus,
				})
				.then(
					res => {
                        _mm.successTips(res);
                        //修改状态完成重新渲染
						this.loadProductList();
					},
					errMsg => {
						_mm.errorTips(res);
					}
				);
		}
	}
	//new Date(user.createTime).toLocaleString() 把 12321312312312 转化 2021/09/22 上午 12:22:33
	render() {
		let tableHeads = [
			{ name: '商品ID', width: '10%' },
			{ name: '商品信息', width: '50%' },
			{ name: '价格', width: '10%' },
			{ name: '状态', width: '15%' },
			{ name: '操作', width: '15%' },
		];
		let listBody = this.state.list.map((product, index) => {
			return (
				<tr key={index}>
					<td>{product.id}</td>
					<td>
						<p>{product.name}</p>
						<p>{product.subtitle}</p>
					</td>
					<td>￥{product.price}</td>
					<td>
						<span>{product.status == 1 ? '在售' : '已下架'}</span>
						<button onClick={e => this.onSetProductStatus(e, product.status)}>
							{product.status == 1 ? '下架' : '上架'}
						</button>
					</td>
					<td>
						<Link to={`/product/detail/${product.id}`}>查看详情</Link>
						<Link to={`/product/save/${product.id}`}>编辑</Link>
					</td>
				</tr>
			);
		});
		return (
			<div id="page-wrapper">
				<PageTitle title="商品列表" />
				<TableList tableHeads={tableHeads}>{listBody}</TableList>
				<Pagination
					current={this.state.pageNum}
					total={this.state.total}
					onChange={pageNum => this.onPageNumChange(pageNum)}
				/>
			</div>
		);
	}
}

export default ProductList;
