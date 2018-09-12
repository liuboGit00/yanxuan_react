import React,{Component} from 'react';
import {connect} from 'react-redux'
import {getHomeInfo} from '../../redux/actions'
import BScroll from 'better-scroll'

import Swiper from 'swiper'

class Msite extends Component{
    state = {
      currentIndex: 0
    }
    componentDidMount(){
      this.props.getHomeInfo()
    }
    componentDidUpdate(){
      const navList = this.navList
      navList.style.width = navList.children.length*50 + 'px'
      new BScroll('.nav',{
        click : true,
        scrollX: true
      })
      //引入swiper插件
      new Swiper('.swiper-container', {
        loop: true,  // 循环轮播
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
      //newCon的左右滑动
      const newGoods = this.newGoods
      newGoods.style.width = newGoods.children.length*160 + 'px'
      new BScroll('.newCon',{
        click : true,
        scrollX: true,
        eventPassthrough: 'vertical'
      })
      //hotCon左右滑动
      const hotGoodsCon = this.hotGoodsCon
      hotGoodsCon.style.width = hotGoodsCon.children.length*160 + 'px'
      new BScroll('.hotGoodsCon',{
        click : true,
        scrollX: true,
        eventPassthrough: 'vertical'
      })
    }
    changeIndex = (index) => {
        this.setState({
          currentIndex: index
        })
    }
    render(){
        if (!this.props.homeInfo.cateList){
            console.log(333)
            return <div>loading</div>
        }
        return (
            <div className='home-container'>
                <div className="tops">
                    <div className="search">
                        <a href="javascript:;">
                            <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png" alt="" />
                        </a>
                        <div className="input">
                            <input type="text" placeholder="搜索商品, 共13111款好物" />
                                <i className="iconfont icon-sousuo"></i>
                        </div>
                    </div>
                    <div className="nav">
                        <div className="navList clearFloat"  ref={(navList) => { this.navList = navList }}>
                          {
                            this.props.homeInfo.cateList.map((item,index) => (
                              <span key={index}
                                    onClick={() => this.changeIndex(index)}
                                    className={this.state.currentIndex === index ? 'on' : ''}>{item.name}</span>
                            ))
                          }
                        </div>
                    </div>
                </div>
                <div className="banner">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                          {
                            this.props.homeInfo.focusList.map((item,index) => (
                              <div className="swiper-slide"  key={index}>
                                  <a href="javascript:;" className="link_to_food" >
                                      <div className="food_container">
                                        {<img src={item.picUrl}/>}
                                      </div>
                                  </a>
                              </div>
                            ))
                          }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                <ul>
                  <li>
                    <i className="iconfont icon-duihaocheckmark17"></i>
                    <span>网易自营品牌</span>
                  </li>
                  <li>
                    <i className="iconfont icon-duihaocheckmark17"></i>
                    <span>30天无忧退货</span>
                  </li>
                  <li>
                    <i className="iconfont icon-duihaocheckmark17"></i>
                    <span>48小时快速退款</span>
                  </li>
              </ul>
                <div className="pinpai">
                  <header>
                    <span>品牌制造商直供</span>
                    <i className="iconfont icon-youjiantou"></i>
                  </header>
                  <ul>
                    {
                      this.props.homeInfo.tagList.slice(0,4).map((item,index) => (
                        <li key={index}>
                          <p>{item.name}</p>
                          <p>{item.floorPrice}元起</p>
                          <p>上新</p>
                          <img src={item.picUrl} alt="" />
                        </li>
                      ))
                    }

                  </ul>
                </div>
                <div className="xinpin">
                  <header>
                    <div>
                      <span>新品首发</span>
                      <div className="look">查看全部></div>
                    </div>
                  </header>
                  <div className="newCon">
                    <ul ref={newGoods => this.newGoods = newGoods}>
                      {
                        this.props.homeInfo.newItemNewUserList.slice(0,5).map((newItem,index) => (
                          <li key={index}>
                            <img src={newItem.listPicUrl} alt="" />
                            <p className="ellipsis">{newItem.name}</p>
                            <p className="ellipsis">{newItem.simpleDesc}</p>
                            <span>￥{newItem.retailPrice}</span>
                          </li>
                        ))
                      }
                      <li className="all">
                        <div>查看全部</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hotGoods">
                  <header>
                    <div>
                      <span>人气推荐 好物推荐</span>
                      <div className="look">查看全部></div>
                    </div>
                  </header>
                  <div className="hotGoodsCon">
                    <ul  ref={hotGoodsCon => this.hotGoodsCon = hotGoodsCon}>
                      {
                        this.props.homeInfo.popularItemList.slice(0,5).map((item,index) => (
                          <li key={index}>
                            <div>
                              <img src={item.listPicUrl} alt="" />
                            </div>
                            {
                              !item.promTag ? <p className='blank'></p> : null
                            }
                            {
                              item.promTag ? <p className="mark">{item.promTag}</p> : null
                            }
                            <p className="ellipsis">{item.name}</p>
                            <p className="ellipsis">{item.simpleDesc}</p>
                            <span>￥{item.retailPrice}</span>
                          </li>
                        ))
                      }
                      <li className="all">
                        <div>查看全部</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="timer">
                  <div className="timeCon clearFloat">
                    <div className="computedTime">
                      <p>严选限时购</p>
                      <div className="time">
                        <span className="hours">00</span>
                        <span className="colon">:</span>
                        <span className="minute">00</span>
                        <span className="colon">:</span>
                        <span className="second">00</span>
                        </div>
                        <div className="nextTime">下一场 <span>10:00</span>开始</div>
                      </div>
                      <div className="person">
                        <div className="price">
                          <span>$7299</span>
                          <span>$1299</span>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="welfare">
                  <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="" />
                </div>
                {
                  this.props.homeInfo.cateList.map((item,index) => (
                    <div className="jujia" key={index} >
                      <div>{item.name}</div>
                      <ul className="jujiaCon" v-if="homeInfo.cateList">
                        {
                          item.itemList.slice(0,5).map((cate,index1) => (
                            <li  key={index1}>
                              <div className="imgcon">
                                <img src={cate.listPicUrl} alt="" />
                              </div>
                              <p className="ellipsis title">{cate.simpleDesc}</p>
                              {
                                cate.promTag ? <p className="discount">{cate.promTag}</p> : null
                              }
                              <p className="dsc">{cate.name}</p>
                              <p className="price">${cate.retailPrice}</p>
                            </li>
                          ))
                        }
                        <li>
                          <p>更多居家好物</p>
                          <i className="icon icon-xiangyou"></i>
                        </li>
                      </ul>
                    </div>
                  ))
                }
                <footer>
                  <ul>
                    <li>下载App</li>
                    <li>电脑版</li>
                  </ul>
                  <p>网易公司版权所有 © 1997-</p>
                  <p>食品经营许可证：JY13301080111719</p>
                </footer>
            </div>
        )
    }

}
//转变成容器组件
export default connect(
  state => ({homeInfo : state.homeInfo}),
  {getHomeInfo}
)(Msite);

