import {RECEIVE_HOME_INFO,
        RECEIVE_SHIWU_INFO,
        RECEIVE_CATEGORY_INFO,
        RECEIVE_DETAILS_INFO} from './actions-type'
import {reqHomeInfo,
        reqShiwuInfo,
        reqCategoryInfo} from '../api/index'
//同步修改
const receiveHomeInfo = homeInfo => ({type: RECEIVE_HOME_INFO,data:homeInfo});
const receiveShiWuInfo = shiWuInfo => ({type:RECEIVE_SHIWU_INFO,data:shiWuInfo})
const receiveCategoryInfo = categoryInfo => ({type:RECEIVE_CATEGORY_INFO,data:categoryInfo})
const receiveDetailsInfo = detailsInfo => ({type:RECEIVE_DETAILS_INFO,data:detailsInfo})

//异步获取数据
//home
export function getHomeInfo() {
  return async dispatch => {
    const result = await reqHomeInfo()
    if (result.code === 0){
      //发布同步的数据
      const homeInfo = result.data
      dispatch(receiveHomeInfo(homeInfo))
    }
  }
}

//shiwu
export function getShiWuInfo() {
  return async dispatch => {
   const result =await reqShiwuInfo()
    if (result.code === 0){
      //同步数据
      const shiWuInfo = result.data
      dispatch(receiveShiWuInfo(shiWuInfo))
    }
  }
}
//category
export function getCategoryInfo() {
  return async dispatch => {
    const result = await reqCategoryInfo()
    if (result.code === 0){
      const categoryInfo = result.data
      dispatch(receiveCategoryInfo(categoryInfo))
    }
  }
}

//categorydetails
export function getCategoryDetails(index) {
  return async dispatch => {
    const result = await reqCategoryInfo()
    if (result.code === 0){
      const detailsInfo = result.data[index]
      dispatch(receiveDetailsInfo(detailsInfo))
    }
  }
}