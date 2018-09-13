import React,{Component} from 'react';
class ShopCart extends Component{
  render(){
    return (
      <div className="shop-Container">
        <header>购物车 <span>领卷</span></header>
        <ul>
          <li>30天无忧退货</li>
          <li>48小时快速退款</li>
          <li>满88元免邮费</li>
        </ul>
        <div className="shop">
          <img src='//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png' alt="" />
        </div>
        <div className="login">登陆</div>
      </div>
    )
  }
}
export default ShopCart;