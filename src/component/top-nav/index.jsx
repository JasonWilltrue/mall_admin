import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.less';

 class TopNav extends Component {
   constructor(props){
     super(props)

     this.onLogout = this.onLogout.bind(this);
   }

  onLogout(){
     alert('退出啦')
  }
	render() {
		return (<div className="navbar navbar-default top-navbar">
    <div className="navbar-header">
        {/* <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button> */}
        <a className="navbar-brand" href="index.html"><b>Admin</b>MMall</a>
    </div>

    <ul className="nav navbar-top-links navbar-right">
      
        <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                <i className="fa fa-bell fa-fw"></i> <i className="fa fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu dropdown-alerts">
                <li>
                    <a href="#">
                        <div>
                            <i className="fa fa-comment fa-fw"></i> New Comment
                            <span className="pull-right text-muted small">4 min</span>
                        </div>
                    </a>
                </li>
                <li className="divider"></li>
                <li>
                    <a href="#">
                        <div>
                            <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                            <span className="pull-right text-muted small">12 min</span>
                        </div>
                    </a>
                </li>
                <li className="divider"></li>
                <li>
                    <a href="#">
                        <div>
                            <i className="fa fa-envelope fa-fw"></i> Message Sent
                            <span className="pull-right text-muted small">4 min</span>
                        </div>
                    </a>
                </li>
                <li className="divider"></li>
                <li>
                    <a href="#">
                        <div>
                            <i className="fa fa-tasks fa-fw"></i> New Task
                            <span className="pull-right text-muted small">4 min</span>
                        </div>
                    </a>
                </li>
                <li className="divider"></li>
                <li>
                    <a href="#">
                        <div>
                            <i className="fa fa-upload fa-fw"></i> Server Rebooted
                            <span className="pull-right text-muted small">4 min</span>
                        </div>
                    </a>
                </li>
                <li className="divider"></li>
                <li>
                    <a className="text-center" href="#">
                        <strong>See All Alerts</strong>
                        <i className="fa fa-angle-right"></i>
                    </a>
                </li>
            </ul>
           
        </li>
        
        <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="javascript:;" >
                <i className="fa fa-user fa-fw"></i>
                <span>Adm</span>
                <i className="fa fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu dropdown-user">
                <li><a href="#"><i className="fa fa-user fa-fw"></i>用户中心</a>
                </li>
                <li><a href="#"><i className="fa fa-gear fa-fw"></i>系统设置</a>
                </li>
                <li className="divider"></li>
                <li>
                  <span onClick={this.onLogout}><i className="fa fa-sign-out fa-fw"></i>退出</span>
                </li>
            </ul>
           
        </li>
      
    </ul>
</div>)
	}
}

export default TopNav;
