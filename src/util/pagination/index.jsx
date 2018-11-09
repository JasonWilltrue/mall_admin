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
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <RcPagination {...this.props} 
                        hideOnSinglePage
                        showQuickJumper/>
                </div>
            </div>
        );
    }
}

export default Pagination;