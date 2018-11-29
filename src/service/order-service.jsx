/*
 * @Author: Jerrychan
 * @Date: 2018-11-29 23:56:12
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-11-30 00:03:41
 * @Description: 订单接口页面
 */

import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class Order {
	// 获取订单列表
	getOrderList(listParam) {
		let url = '',
			data = {};
		if (listParam.listType === 'list') {
			url = '/manage/order/list.do';
			data.pageNum = listParam.pageNum;
		} else if (listParam.listType === 'search') {
			url = '/manage/order/search.do';
			data.pageNum = listParam.pageNum;
			data.orderNo = listParam.orderNo;
		}
		return _mm.request({
			type: 'post',
			url: url,
			data: data,
		});
	}
	// 获取订单详情
	getOrderDetail(orderNumber) {
		return _mm.request({
			type: 'post',
			url: '/manage/order/detail.do',
			data: {
				orderNo: orderNumber,
			},
		});
	}
	sendGoods(orderNumber) {
		return _mm.request({
			type: 'post',
			url: '/manage/order/send_goods.do',
			data: {
				orderNo: orderNumber,
			},
		});
	}
}

export default Order;
