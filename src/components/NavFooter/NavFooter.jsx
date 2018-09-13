import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class NavFooter extends Component {

    render() {
        return (
            (
                <footer className="footer_guide">
                      <span  className={this.props.location.pathname === '/msite' ? 'guide_item on ' : 'guide_item'}
                             onClick={() => {this.props.history.replace('/msite')}}>
                        <span className="item_icon">
                          <i className="iconfont icon-shouye"></i>
                        </span>
                        <span>首页</span>
                      </span>

                    <span className={this.props.location.pathname === '/knowledge' ? 'guide_item on ' : 'guide_item'}
                          onClick={() => {this.props.history.replace('/knowledge')}}>
                        <span className="item_icon">
                            <i className="iconfont icon-hui"></i>
                        </span>
                        <span>识物</span>
                    </span>
                    <span className={this.props.location.pathname === '/category' ? 'guide_item on ' : 'guide_item'}
                      onClick={() => {this.props.history.replace('/category')}}>
                        <span className="item_icon">
                            <i className="iconfont icon-chouti"></i>
                        </span>
                        <span>分类</span>
                    </span>
                    <span className={this.props.location.pathname === '/shopCart' ? 'guide_item on ' : 'guide_item'}
                      onClick={() => {this.props.history.replace('/shopCart')}}>
                        <span className="item_icon">
                            <i className="iconfont icon-tab-bar--n"></i>
                         </span>
                        <span>购物车</span>
                    </span>
                    <span className={this.props.location.pathname === '/profile' ? 'guide_item on ' : 'guide_item'}
                      onClick={() => {this.props.history.replace('/profile')}}>
                        <span className="item_icon">
                            <i className="iconfont icon-geren"></i>
                        </span>
                        <span>我的</span>
                    </span>
                </footer>
            )
        )
    }
}
export default withRouter(NavFooter)
