import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

import HeaderTop from '../../components/HeaderTop/HeaderTop'
class Login extends Component {
  state = {
    errMsg : '',
    computeTime : 0,
    phone: null,
    msgCode: null,
    user: null,
    password: null
  }
  sendCode = () =>{
    if (this.state.computeTime > 0){
      return
    }
    /*1. 实现倒计时功能*/
    this.setState({
      computeTime : 20
    })
    // 启循环定时器, 改变computedTime
    const interverId = setInterval(() => {
      let time = this.state.computeTime
      time--
      this.setState({
        computeTime : time
      })
      // 当计时达到最小值时, 清除定时器
      if (this.state.computeTime <= 0) {
        this.state.computeTime = 0
        clearInterval(interverId)
      }
    }, 1000)
  }
  login = (method) => {
      if (method === 'phone') {
        console.log(this.state.phone)
        if (!/^1\d{10}$/.test(this.state.phone)) {
          this.setState({
            errMsg : '请输入正确的手机号格式'
          })
          return
        } else if (!this.state.msgCode) {
          this.setState({
            errMsg : '请输入短信验证码'
          })
          return
        }else {
          this.setState({
            errMsg : ''
          })
        }
      } else if (method === 'msg') {
        if (!this.state.user) {
          this.setState({
            errMsg : '请输入用户名'
          })
          return
        } else if (!this.state.password) {
          this.setState({
            errMsg : '请输入密码'
          })
          return
        }else {
          this.setState({
            errMsg : ''
          })
        }
      }
  }
  change = (name) => {
    if (name === 'phone'){
      const phoneVal = this.phone.value
      this.setState({
        [name]:phoneVal
      })
    }else if (name === 'msgCode'){
      const msgCode = this.msgCode.value
      this.setState({
        [name]:msgCode
      })
    }else if (name === 'user'){
      const user = this.user.value
      this.setState({
        [name]:user
      })
    }else if (name === 'password'){
      const password = this.password.value
      this.setState({
        [name]:password
      })
    }
  }
  render() {
    return (
      <div className="login-Container">
        <HeaderTop />
        <div className="imgCon">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="" />
        </div>
        <form action="javascript:;">
          <p className="errorMsg">{this.state.errMsg}</p>
          <div className={this.props.location.pathname === '/messageLg' ? 'Lg ph off' : 'Lg ph'}>
              <input type="text" placeholder="请输入手机号"
                onChange={() => this.change('phone')}
                ref={phone => this.phone = phone}
              />
              <div className="code">
                <input type="text" placeholder='请输入短信验证码' v-model="msgCode"
                 onChange={() => this.change('msgCode')}
                 ref={msgCode => this.msgCode = msgCode}
                />
                <span className="codeBtn" onClick={this.sendCode}>
                  {this.state.computeTime > 0 ? `已发送(${this.state.computeTime}s)` : '获取验证码'}
                </span>
              </div>
              <p>
                <span className="error">遇到问题</span>
                <span className="change">使用密码验证登陆</span>
              </p>
              <div className="login" onClick={() => this.login('phone')}>登陆</div>
              <div className="other" onClick={() => this.props.history.replace('/profile')}>其它登陆方式</div>
          </div>
          <div className={this.props.location.pathname === '/phoneLg' ? 'Lg mes off' : "Lg mes"}>
          <input type="text" placeholder="用户名"
             onChange={() => this.change('user')}
             ref={user => this.user = user}
          />
            <div className="code">
              <input type="text" placeholder='密码'
               onChange={() => this.change('password')}
               ref={password => this.password = password}
              />
            </div>
            <p>
              <span className="error">注册账号</span>
              <span className="change">忘记密码</span>
            </p>
            <div className="login" onClick={() => this.login('msg')}>登陆</div>
            <div className="other" onClick={() => this.props.history.replace('/profile')}>其它登陆方式</div>
          </div>
        </form>
      </div>
    )
  }
}
export default withRouter(Login)