import React,{Component} from 'react';
import {connect} from 'react-redux'
import Swiper from 'swiper'
import BScroll from 'better-scroll'
//引入header组件
import HeaderTop from '../../components/HeaderTop/HeaderTop'


import {getShiWuInfo} from '../../redux/actions'
class Knowledge extends Component{
    componentDidMount(){
        this.props.getShiWuInfo()
    }
    componentDidUpdate(){
      new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: 5000,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
        }
      })
      //文章部分左右滑动部分
      const articalCon = this.articalCon
      articalCon.style.width = articalCon.children.length * 97 + 'px'
      //artical滚动
      new BScroll('.artical',{
        click : true,
        scrollX: true
      })

      //每日一刻左右滑动
      new BScroll('.scrollCon',{
        click : true,
        scrollX: true
      })

    }
    render(){
        if (!Object.keys(this.props.shiWuInfo).length){
            console.log(444)
            return <div>loading</div>
        }
        const {shiWuInfo} = this.props
        return (
          <div className='shiwu-container'>
            <HeaderTop />
            <div className="banner">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                      {
                          this.props.shiWuInfo.banner.map((shiwu,index) => (
                          <div className="swiper-slide" key={index} >
                              <a href="javascript:" className="link_to_food" >
                                  <div className="food_container">
                                      <img src={shiwu.picUrl}/>
                                  </div>
                              </a>
                          </div>
                        ))
                      }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
            <div className="artical">
              <ul ref={articalCon => this.articalCon = articalCon}>
                {
                  this.props.shiWuInfo.column.map((item,index) => (
                    <li key={index}>
                      <div className="imgCon">
                        <img src={item.picUrl} alt="" />
                        <p>{item.articleCount}</p>
                      </div>
                      <p className="ellipsis">{item.title}</p>
                    </li>
                  ))
                }
              </ul>
        </div>
            <div className="recommend">
              <p className="recomTitle">为你推荐</p>
              <div className="recomMain">
                <div className="news" >
                  <div className="mainNews">
                    <img src={this.props.shiWuInfo.recommendOne.picUrl} alt="" />
                    <span className="mark">{this.props.shiWuInfo.recommendOne.nickname}</span>
                    <div className="pricedsc clearFloat">
                      <span>{this.props.shiWuInfo.recommendOne.title}</span>
                      <p className="price"><span>{this.props.shiWuInfo.recommendOne.priceInfo}</span>元起</p>
                    </div>
                    <p>{this.props.shiWuInfo.recommendOne.subTitle}</p>
                  </div>
                  <div className="newsList1 clearFloat">
                    <div className="person">
                      <div className="auther">
                        <img src={this.props.shiWuInfo.recommendOne.avatar} alt="" />
                        <span>饮食组</span>
                      </div>
                      <div className="title ellipsis">{this.props.shiWuInfo.recommendOne.subTitle}</div>
                      <div className="desc ellipsis">所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异国料理，也是别有一番风味。在海外待过不少时日，遍尝各国美食的我，想给大家推荐几款方便的快手菜，让你10分钟就能品尝到异域大餐。</div>
                    </div>
                    <div className="pic ">
                      <img src={this.props.shiWuInfo.recommendOne.avatar} alt="" />
                      <span className="markNew">{this.props.shiWuInfo.recommendOne.typeName}</span>
                    </div>
                  </div>
                  <div className="newsList1 clearFloat">
                    <div className="person">
                      <div className="auther">
                        <img src={this.props.shiWuInfo.recommendThree.avatar} alt="" />
                        <span>饮食组</span>
                      </div>
                      <div className="title ellipsis">{this.props.shiWuInfo.recommendThree.subTitle}</div>
                      <div className="desc ellipsis">所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异国料理，也是别有一番风味。在海外待过不少时日，遍尝各国美食的我，想给大家推荐几款方便的快手菜，让你10分钟就能品尝到异域大餐。</div>
                    </div>
                    <div className="pic ">
                      <img src={this.props.shiWuInfo.recommendThree.avatar} alt="" />
                      <span className="markNew">{this.props.shiWuInfo.recommendThree.typeName}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recomMain">
                <div className="news" >
                  <div className="mainNews">
                    <img src={this.props.shiWuInfo.recommendTwo.picUrl} alt="" />
                    <span className="mark">{this.props.shiWuInfo.recommendTwo.nickname}</span>
                    <div className="pricedsc clearFloat">
                      <span>{this.props.shiWuInfo.recommendTwo.title}</span>
                      <p className="price"><span>{this.props.shiWuInfo.recommendTwo.priceInfo}</span>元起</p>
                    </div>
                    <p>{this.props.shiWuInfo.recommendTwo.subTitle}</p>
                  </div>
                  <div className="newsList1 clearFloat">
                    <div className="person">
                      <div className="auther">
                        <img src={this.props.shiWuInfo.recommendTwo.avatar} alt="" />
                        <span>饮食组</span>
                      </div>
                      <div className="title ellipsis">{this.props.shiWuInfo.recommendTwo.subTitle}</div>
                      <div className="desc ellipsis">所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异国料理，也是别有一番风味。在海外待过不少时日，遍尝各国美食的我，想给大家推荐几款方便的快手菜，让你10分钟就能品尝到异域大餐。</div>
                    </div>
                    <div className="pic ">
                      <img src={this.props.shiWuInfo.recommendTwo.avatar} alt="" />
                      <span className="markNew">{this.props.shiWuInfo.recommendTwo.typeName}</span>
                    </div>
                  </div>
                  <div className="newsList1 clearFloat">
                    <div className="person">
                      <div className="auther">
                        <img src={this.props.shiWuInfo.recommendThree.avatar} alt="" />
                        <span>饮食组</span>
                      </div>
                      <div className="title ellipsis">{this.props.shiWuInfo.recommendTwo.subTitle}</div>
                      <div className="desc ellipsis">所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异国料理，也是别有一番风味。在海外待过不少时日，遍尝各国美食的我，想给大家推荐几款方便的快手菜，让你10分钟就能品尝到异域大餐。</div>
                    </div>
                    <div className="pic ">
                      <img src={this.props.shiWuInfo.recommendTwo.avatar} alt="" />
                      <span className="markNew">{this.props.shiWuInfo.recommendTwo.typeName}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="topic">
              <div className="title">十点一刻</div>
              <div className="scrollCon">
                <div className="scrollItem">
                  <div className="example">
                    <div className="example_inner">
                      <div className="header">-今日话题-</div>
                      <div className="title">{shiWuInfo.tenfifteen[0].title}</div>
                      <div className="desc">{shiWuInfo.tenfifteen[0].desc}</div>
                      <div className="user">
                        <div className="imgCon">
                          <img src={shiWuInfo.tenfifteen[0].participantAvatar[1]} alt="" />
                          <img src={shiWuInfo.tenfifteen[0].participantAvatar[2]} alt="" />
                          <div className="dot">...</div>
                        </div>
                        <span className="count">977人参与讨论</span>
                      </div>
                    </div>
                  </div>
                  <div className="more">
                    <span>查看全部话题</span>
                    <i className="iconfont icon-qq"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="look" >
              <div className="head">严选look</div>
              <div className="main">
                <img src={shiWuInfo.zhenThree.picUrl} alt="" />
                <div className="info">
                  <div className="user">
                    <img src={shiWuInfo.zhenThree.avatar} alt="" />
                    <span>{shiWuInfo.zhenThree.nickname}</span>
                  </div>
                  <p className="desc">{shiWuInfo.zhenThree.subTitle}</p>
                </div>
              </div>
            </div>
            <div className="more" >
              <div className="lineHeader">
                <span>更多精彩</span>
              </div>
              {
                shiWuInfo.findMore.map((find,index) => (
                  <div className="picList" key={index}>
                    <div className="item">
                      <img src={find.itemPicUrl} alt="" />
                      <p>{find.title}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        )
    }
}


//包裹成容器组件
export default connect (
  state => ({shiWuInfo: state.shiWuInfo}),
  {getShiWuInfo}
)(Knowledge);
