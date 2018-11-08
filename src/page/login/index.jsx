/*
 * @Author: Jerrychan
 * @Date: 2018-11-08 17:29:44
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-11-08 17:29:50
 * @Description: 登陆页
 */

import React        from 'react';

import './index.less';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            
        }
    }
   
    render(){
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading">欢迎登录 - MMALL管理系统</div>
                    <div className="panel-body">
                        <div>
                            <div className="form-group">
                                <input type="text"
                                    name="username"
                                    className="form-control"
                                    placeholder="请输入用户名" 
                                  />
                            </div>
                            <div className="form-group">
                                <input type="password" 
                                    name="password"
                                    className="form-control" 
                                    placeholder="请输入密码" 
                                   />
                            </div>
                            <button className="btn btn-lg btn-primary btn-block"
                            >登录</button>
                        </div>
                    </div>
                </div>
            </div>
                    
        );
    }
}

export default Login;