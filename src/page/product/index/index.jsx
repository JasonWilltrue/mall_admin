/*
 * @Author: Jerrychan
 * @Date: 2018-11-10 15:15:48
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-11-10 23:35:58
 * @Description: 商品列表
 */

import React        from 'react';
import { Link }     from 'react-router-dom';
import MUtil        from 'util/mm.jsx'
import User         from 'service/product-service.jsx'

import PageTitle    from 'component/page-title/index.jsx';
import TableList    from 'util/table-list/index.jsx';
import Pagination   from 'util/pagination/index.jsx';

const _mm   = new MUtil();
const _user = new User();

class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list            : [],
            pageNum         : 1
        };
    }
    componentDidMount(){
        this.loadUserList();
    }
    loadUserList(){
        _user.getProductList({
          listType:'list',
          pageNum:this.state.pageNum
        }).then(res => {
            console.log(res);
            this.setState(res);
        }, errMsg => {
            this.setState({
                list : []
            });
            _mm.errorTips(errMsg);
        });
    }
    // 页数发生变化的时候
    onPageNumChange(pageNum){
      // setstate是异步函数 要在函数之后加回调函数
        this.setState({
            pageNum : pageNum
        }, () => {
            this.loadUserList();
        });
    }
    //new Date(user.createTime).toLocaleString() 把 12321312312312 转化 2021/09/22 上午 12:22:33
    render(){
        let listBody = this.state.list.map((user, index) => {
            return (
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.price}</td>
                    <td>{user.status}</td>
                    <td>{user.subtitle}</td>
                </tr>
            );
        });
        return (
            <div id="page-wrapper">
                <PageTitle title="商品列表"/>
                <TableList tableHeads={['ID', '商品名称', '价格', '状态', '副标题']}>
                    {listBody}
                </TableList>
                <Pagination current={this.state.pageNum} 
                    total={this.state.total} 
                    onChange={(pageNum) => this.onPageNumChange(pageNum)}/>
            </div>
        );
    }
}

export default ProductList;