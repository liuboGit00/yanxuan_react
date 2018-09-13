import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'

class HeaderTop extends Component{
  render(){
    return (
      <div className='TopHeader clearFloat'>
        <div className="headerCon">
          <div className="iconfont icon-shouye" onClick={() => this.props.history.replace('/msite')}></div>
          <img src='//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png' alt="" />
          <div className="iconCon">
            <div className="iconfont icon-fangdajing"></div>
            <div className="iconfont icon-icon"></div>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(HeaderTop);