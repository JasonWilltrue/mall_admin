import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

/*
 * @Author: Jerrychan
 * @Date: 2018-11-08 17:25:15
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-11-30 23:03:40
 * @Description: 封装方法
 */
import { Sweetalert, Button } from 'zent';
import { Message } from 'element-react';

class MUtil {
	request(param) {
		return new Promise((resolve, reject) => {
			$.ajax({
				type: param.type || 'get',
				url: param.url || '',
				dataType: param.dataType || 'json',
				data: param.data || null,
				success: res => {
					// 数据请求成功
					if (0 === res.status) {
						typeof resolve === 'function' && resolve(res.data, res.msg);
					}
					// 没有登录状态，强制登录
					else if (10 === res.status) {
						this.doLogin();
					} else {
						typeof reject === 'function' && reject(res.msg || res.data);
					}
				},
				error: err => {
					typeof reject === 'function' && reject(err.statusText);
				},
			});
		});
	}
	// 跳转登录
	doLogin() {
		window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
	}
	// 获取URL参数
	getUrlParam(name) {
		// param=123&param1=456
		let queryString = window.location.search.split('?')[1] || '',
			reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)'),
			result = queryString.match(reg);
		return result ? decodeURIComponent(result[2]) : null;
	}
	// 成功提示
	successTips(successMsg) {
		Message({
			message: successMsg,
			type: 'success',
		});
		// layer.alert(successMsg, {icon: 1});
	}
	// 错误提示
	errorTips(errMsg) {
		Message.error('错了哦.' + errMsg);

		//   layer.alert(errMsg || '好像哪里不对了~', {icon: 2});
	}
	// 本地存储
	setStorage(name, data) {
		/**
		 * 扩展 对过期时间的处理
		 */
		let dataType = typeof data;
		// json对象  data是json 必须json序列化
		if (dataType === 'object') {
			window.localStorage.setItem(name, JSON.stringify(data));
		}
		// 基础类型
		else if (['number', 'string', 'boolean'].indexOf(dataType) >= 0) {
			window.localStorage.setItem(name, data);
		}
		// 其他不支持的类型
		else {
			layer.msg('该类型不能用于本地存储');
		}
	}
	// 取出本地存储内容
	getStorage(name) {
		let data = window.localStorage.getItem(name);
		if (data) {
			return JSON.parse(data);
		} else {
			return '';
		}
	}
	// 删除本地存储
	removeStorage(name) {
		window.localStorage.removeItem(name);
	}
}

export default MUtil;
