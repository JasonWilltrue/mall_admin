/*
 * @Author: Jerrychan
 * @Date: 2018-11-08 15:16:57
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-11-08 15:19:15
 * @Description: 网页错误组件
 */

import React, { Component } from 'react';
import PageTitle from 'component/page-title/index.jsx';
import { Link } from 'react-router-dom';
import './index.less';

class UserList extends Component {
	componentDidMount() {
		// layui.use('form', function() {
		// 	var form = layui.form;

		// 	//监听提交
		// 	// form.on('submit(formDemo)', function(data){
		// 	//   layer.msg(JSON.stringify(data.field));
		// 	//   return false;
		// 	// });
		// });
	}

	render() {
		return (
			<div id="page-wrapper">
				<PageTitle title="用户列表" />
        <div className="layui-form layui-border-box layui-table-view">
        <div className="layui-table-body layui-table-main">
				<table className="layui-table" >
					<colgroup>
						<col width="50" />
						<col width="200" />
						<col width="200" />
            <col width="20%" />
            <col width="20%" />
            <col width="10%" />
						<col />
					</colgroup>
					<thead>
						<tr>
							<th />
							<th>ID</th>
							<th>用户名</th>
							<th>性别</th>
							<th>密码</th>
							<th>手机号</th>
						</tr>
					</thead>
					<tbody className="layui-text">
						<tr data-index="0">
							<td >
									<div className="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox">
										<input type="checkbox" name="layTableCheckbox" lay-skin="primary" />
										<div className="layui-unselect layui-form-checkbox layui-form-checked" lay-skin="primary">
											<i className="layui-icon layui-icon-ok" />
										</div>
									</div>
							</td>
							<td>01</td>
							<td>
								张三
							</td>
							<td>男</td>
							<td>123123123</td>
              <td>110</td>
						</tr>
            <tr data-index="1">
							<td >
									<div className="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox">
										<input type="checkbox" name="layTableCheckbox" lay-skin="primary" />
										<div className="layui-unselect layui-form-checkbox " lay-skin="primary">
											<i className="layui-icon layui-icon-ok" />
										</div>
									</div>
							</td>
							<td>01</td>
							<td>
								张三
							</td>
							<td>男</td>
							<td>123123123</td>
              <td>110</td>
						</tr>
						<tr data-index="2">
							<td >
									<div className="layui-table-cell laytable-cell-1-0-0 laytable-cell-checkbox">
										<input type="checkbox" name="layTableCheckbox" lay-skin="primary" />
										<div className="layui-unselect layui-form-checkbox " lay-skin="primary">
											<i className="layui-icon layui-icon-ok" />
										</div>
									</div>
							</td>
							<td>01</td>
							<td>
								张三
							</td>
							<td>男</td>
							<td>123123123</td>
              <td>110</td>
						</tr>
					</tbody>
				</table>
        </div>
			  </div>
      </div>
		);
	}
}

export default UserList;
