/*
 * @Author: Jerrychan
 * @Date: 2018-11-08 17:29:44
 * @LastEditors: Jerrychan
 * @LastEditTime: 2018-11-08 17:29:50
 * @Description: 登陆页
 */

import React from 'react';
import MUtil from 'util/mm.jsx';
import './index.less';
import UserService from 'service/user-service.jsx';
import Button from 'zent/lib/button';


let _mm = new MUtil();
let _user = new UserService();

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
            password: '',
            redirect: _mm.getUrlParam('redirect') || '/'
		};
    }
    componentWillMount(){
        document.title = '登录 - MMALL ADMIN';
    }
    onInputKeyUp(e){
        if(e.keyCode === 13){
            this.onSubmit();
        }
    }
	/**
	 * get一个  当input框很多的时候 只用一个函数解决所有输入问题
	 * @param {} e
	 */
	onInputChange(e) {
		let inputValue = e.target.value,
			inputName = e.target.name;
		console.log(inputValue, inputName);
		this.setState({
			[inputName]: inputValue,
		});
	}
	onSubmit(){
        
        let loginInfo = {
                username : this.state.username,
                password : this.state.password
            },
            checkResult = _user.checkLoginInfo(loginInfo);
        // 验证通过
        if(checkResult.status){
            _user.login(loginInfo).then((res) => {
                _mm.setStorage('userInfo', res);
                // history是由react提供的对象
                 this.props.history.push(this.state.redirect);
            }, (errMsg) => {
                 _mm.errorTips(errMsg);
            });
        }
        // 验证不通过
        else{
           _mm.errorTips(checkResult.msg);
        } 
    }
	render() {
		return (
			<div className="col-md-4 col-md-offset-4">
				<div className="panel panel-default login-panel">
					<div className="panel-heading">欢迎登录 - MMALL管理系统</div>
					<div className="panel-body">
						<div>
							<div className="form-group">
								<input
									type="text"
									name="username"
									className="form-control"
									placeholder="请输入用户名"
									onChange={e => this.onInputChange(e)}
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									name="password"
									className="form-control"
									placeholder="请输入密码"
									onChange={e => this.onInputChange(e)}
								/>
							</div>
							<Button type="primary"
							 className="loginBtn"
							 onClick={e => this.onSubmit(e)} 
							 onKeyUp={e => this.onInputKeyUp(e)} 
							>登录</Button>
							
							
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
