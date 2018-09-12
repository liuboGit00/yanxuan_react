import React, {Component} from 'react';

export default class Main extends Component {
  render() {
    return (
      <div className="search-container">
        <input type="text" placeholder="搜索商品 共123件好物" />
        <i className="iconfont icon-sousuo"></i>
      </div>
    )
  }
}