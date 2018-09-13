import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'
import HeaderTop from '../../components/HeaderTop/HeaderTop'

class Profile extends Component{
  render(){
    return (
      <div className="profile-Container">
        <HeaderTop />
        <div className="imgCon">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="" />
        </div>
        <div className="phoneLogin" onClick={() => this.props.history.replace('/phoneLg')}><i className="iconfont icon-qq"></i>手机号码登陆</div>
        <div className="emailLogin" onClick={() => this.props.history.replace('/messageLg')}><i className="iconfont icon-qq"></i>邮箱账号登陆</div>
        <p><a href="javascript:;">手机快捷注册 &gt; </a></p>
        <ul className="icons">
          <li>
            <i className="iconfont icon-weixin"></i>
            <span>微信</span>
          </li>
          <li>|</li>
          <li>
            <i className="iconfont icon-qq"></i>
            <span>QQ</span>
          </li>
          <li>|</li>
          <li>
            <i className="iconfont icon-weibo"></i>
            <span>微博</span>
          </li>
        </ul>
      </div>
    )
  }
}
export default withRouter(Profile);