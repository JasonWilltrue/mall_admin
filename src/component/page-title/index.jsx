/*
 * @Author: Jerrychan
 * @Date: 2018-11-08 17:13:10
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-11-08 17:13:29
 * @Description: 首页标题
 */

import React from 'react';

class PageTitle extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        document.title = this.props.title + ' - ADMIN MMALL';
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                <blockquote className="layui-elem-quote">{this.props.title}  </blockquote>
                    {/* 容器组件加入 */}
                    {this.props.children}   
                </div>
            </div>
        );
    }
}

export default PageTitle;