import React, {Component} from 'react';
import {connect} from 'react-redux'

import {getCategoryInfo,
        getCategoryDetails} from '../../redux/actions'
import BScroll from 'better-scroll'
class List extends Component {
  state = {
    select:0
  }
  componentDidMount(){
    this.props.getCategoryInfo()
    this.props.getCategoryDetails(0)
    /*new BScroll('.cons',{
      click: true
    })*/
  }
  componentDidUpdate(){

    //动态计算右边的高度
    //计算右边的高度
    this.computedHeight()
    //右边滚动
    if (!this.cons){
      return
    }
    new BScroll(this.cons,{
      click: true
    })
  }
  computedHeight = () => {
    const listCon = this.listCon
    const uls1 = this.uls1
    const uls2 = this.uls2
    if (this.props.detailsInfo.type === 1){
      listCon.style.height = uls1.children.length/3 * 100 + 'px'
    }else if (this.props.detailsInfo.type === 0){
      listCon.style.height = uls2.children.length * 200 + 'px'
    }
  }
  selectItem = (index) => {
    this.setState({
      select : index
    })
    this.props.getCategoryDetails(index)
    this.computedHeight()
  }
  render() {
    const {categoryInfo,detailsInfo} = this.props
    if (!detailsInfo.subCateList){
      return <div>loading</div>
    }
    return (
        <div className="list-Container">
          <div className="menu">
            <ul className="scroll" ref={leftCon => this.leftCon = leftCon}>
              {
                categoryInfo.map((cate,index) => (
                  <li key={index}
                      onClick={() => this.selectItem(index)}
                      className={index === this.state.select ?  'on': null}>{cate.name}</li>
                ))
              }
            </ul>
          </div>
          <div className="cons" ref={cons => this.cons = cons}>
            <div className="main" ref={listCon => this.listCon = listCon}>
              <img src={detailsInfo.bannerUrl} alt="" />
              {
                detailsInfo.type === 1 ?
                  <ul className="list1" ref={uls1 => this.uls1 = uls1}>
                    {
                      detailsInfo.subCateList.map((item, index) => (
                        <li key={index}>
                          <div className="imgCon">
                            <img src={item.wapBannerUrl} alt=""/>
                          </div>
                          <div className="desc">{item.name}</div>
                        </li>
                      ))
                    }
                  </ul> : null
              }
              {
                detailsInfo.type === 0 ?
                  <ul className="list2" ref={uls2 => this.uls2 = uls2}>
                    {
                      detailsInfo.subCateList.slice(0,5).map((item,index) => (
                        <li key={index}>
                          {
                            item.subCateList.length ?
                              <header>{item.name}</header> : null
                          }
                          <ul className="level2">
                            {
                              item.subCateList.map((level2,index2) => (
                                <li key={index2}>
                                  <div className="imgCon">
                                    <img src={level2.wapBannerUrl} alt="" />
                                  </div>
                                  <div className="desc">{level2.name}</div>
                                </li>
                              ))
                            }
                          </ul>
                        </li>
                      ))
                    }
                  </ul>  : null
              }
            </div>
          </div>
        </div>
    )
  }
}
//封装成容器组件
export default connect(
  state => ({categoryInfo: state.categoryInfo,detailsInfo:state.detailsInfo}),
  {getCategoryInfo,getCategoryDetails}
)(List);