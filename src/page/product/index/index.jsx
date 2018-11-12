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
import Product from 'service/product-service.jsx';

import PageTitle from 'component/page-title/index.jsx';
import TableList from 'util/table-list/index.jsx';
import Pagination from 'util/pagination/index.jsx';
import ListSearch from './index-list-search.jsx';
import './index.less';

const _mm = new MUtil();
const _product = new Product();

class ProductList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			pageNum: 1,
			listType: 'list',
		};
	}
	componentDidMount() {
		this.loadProductList();
	}
	// 加载商品列表
	loadProductList() {
		let listParam = {};
		listParam.listType = this.state.listType;
		listParam.pageNum = this.state.pageNum;
		// 如果是搜索的话，需要传入搜索类型和搜索关键字
		if (this.state.listType === 'search') {
			listParam.searchType = this.state.searchType;
			listParam.keyword = this.state.searchKeyword;
		}
		// 请求接口
		_product.getProductList(listParam).then(
			res => {
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

	onSetProductStatus(e, productId, currentStatus) {
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

	// 搜索
	onSearch(searchType, searchKeyword) {
		let listType = searchKeyword === '' ? 'list' : 'search';
		this.setState(
			{
				listType: listType,
				pageNum: 1,
				searchType: searchType,
				searchKeyword: searchKeyword,
			},
			() => {
				this.loadProductList();
			}
		);
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
						<p>{product.status == 1 ? '在售' : '已下架'}</p>
						<button
							className="btn btn-warning btn-xs"
							onClick={e => this.onSetProductStatus(e, product.id, product.status)}
						>
							{product.status == 1 ? '下架' : '上架'}
						</button>
					</td>
					<td>
						<Link className="btn btn-primary" to={`/product/detail/${product.id}`}>
							查看详情
						</Link>
						<Link style={{ marginLeft: 20 }} className="btn btn-success" to={`/product/save/${product.id}`}>
							编辑
						</Link>
					</td>
				</tr>
			);
		});
		return (
			<div id="page-wrapper">
				<PageTitle title="商品列表" />
				<ListSearch
					onSearch={(searchType, searchKeyword) => {
						this.onSearch(searchType, searchKeyword);
					}}
				/>
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
