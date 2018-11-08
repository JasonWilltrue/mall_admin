/*
 * @Author: Jerrychan
 * @Date: 2018-11-08 15:16:57
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-11-08 15:19:15
 * @Description: 通用组件
 */



import React,{Component} from 'react';


import TopNav from 'component/top-nav/index.jsx';
import SideNav from 'component/side-nav/index.jsx';
import './theme.less';


class Layout extends Component{
    constructor(props){
       super(props)
    }
    render(){
       return (
          <div id="wrapper">
           <TopNav/>
           <SideNav/>
          {this.props.children}
          </div>
       )
    }
}

export default Layout;