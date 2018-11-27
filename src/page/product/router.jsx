/*
 * @Author: Jerrychan
 * @Date: 2018-11-10 15:10:13
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-11-13 19:04:49
 * @Description: 商品模块路由
 */

 
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';

import ProductList from 'page/product/index/index.jsx';
import ProductSave from 'page/product/index/save.jsx';
import ProductDetail from 'page/product/index/detail.jsx';
import CategoryList from 'page/product/category/index.jsx';

class ProductRouter extends Component {
	render() {
		return (
				<Switch>
					<Route path="/product/index" component={ProductList} />
					<Route path="/product/save/:pid?" component={ProductSave} />
					<Route path="/product/detail/:pid" component={ProductDetail}/>
					<Route path="/product-category/index/:categoryid" component={CategoryList}/>
					<Redirect exact from ="/product"  to="/product/index"/>
					<Redirect exact from ="/product-category"  to="/product-category/index"/>
				</Switch>
		
		);
	}
}

export default ProductRouter;

