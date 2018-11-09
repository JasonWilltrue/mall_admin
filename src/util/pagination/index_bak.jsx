/*
 * @Author: Jerrychan
 * @Date: 2018-11-09 14:32:57
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-11-09 14:33:07
 * @Description: 分页组件的加载
 */

import React        from 'react';
import RcPagination   from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css';

// 通用分页组件
class Pagination extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        console.log(this.props.totalPage);
   
        
		
	}
    render(){
       
        return (
           null
        );
    }
}

export default Pagination;