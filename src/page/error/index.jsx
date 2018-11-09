/*
 * @Author: Jerrychan
 * @Date: 2018-11-08 15:16:57
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-11-08 15:19:15
 * @Description: 网页错误组件
 */



import React,{Component} from 'react';
import PageTitle from 'component/page-title/index.jsx';
import { Link } from 'react-router-dom';
import './index.less';
class Error extends Component{
  
    render(){
       return (
        <div id="page-wrapper">
             	<PageTitle title="错误页面" />
               <div className="icon_404">
               <i className="layui-icon layui-icon-404"></i>
               </div>
               <Link to="/" className="layui-btn">跳回首页</Link>
          </div>
       )
    }
}

export default Error;