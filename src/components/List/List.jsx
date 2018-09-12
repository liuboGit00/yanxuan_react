import React, {Component} from 'react';
import {connect} from 'react-redux'

import {getCategoryInfo} from '../../redux/actions'
class List extends Component {
  state = {
    select:0
  }
  componentDidMount(){
    this.props.getCategoryInfo()
  }
  componentDidUpdate(){

  }
  selectItem = (index) => {
    this.setState({
      select : index
    })
  }
  render() {
    const {categoryInfo} = this.props
    return (
        <div className="list-Container">
          <div className="menu">
            <ul className="scroll" ref="leftCon">
              {
                categoryInfo.map((cate,index) => (
                  <li key={index}
                      onClick={() => this.selectItem(index)}
                      className={index === this.state.select ?  'on': null}>{cate.name}</li>
                ))
              }
            </ul>
          </div>
          {/*<div className="con">
            <div className="main" ref="listCon">
              <img src="detailsInfo.bannerUrl" alt="" />
              <ul className="list1" ref='uls1' v-if="detailsInfo.type === 1">
                <li v-for="(item,index) in detailsInfo.subCateList" key="index">
                  <div className="imgCon">
                    <img src="item.wapBannerUrl" alt="" />
                  </div>
                  <div className="desc">{item.name}</div>
                </li>
              </ul>
              <ul className="list2" ref='uls2' v-if="detailsInfo.type === 0">
                <li v-for="(item,index) in detailsInfo.subCateList.slice(0,5)">
                  <header v-show="item.subCateList.length">{item.name}</header>
                  <ul className="level2">
                    <li v-for="(level2,index) in item.subCateList" key="index">
                      <div className="imgCon">
                        <img src="level2.wapBannerUrl" alt="" />
                      </div>
                      <div className="desc">{level2.name}</div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>*/}
        </div>
    )
  }
}
//封装成容器组件
export default connect(
  state => ({categoryInfo: state.categoryInfo}),
  {getCategoryInfo}
)(List);