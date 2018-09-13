import {combineReducers} from 'redux'
import {RECEIVE_HOME_INFO,
        RECEIVE_SHIWU_INFO,
        RECEIVE_CATEGORY_INFO,
        RECEIVE_DETAILS_INFO} from './actions-type'

//home里的数据
const initHome = {}
function homeInfo(prState = initHome,action) {
    switch (action.type){
      case RECEIVE_HOME_INFO:
            const homeInfo = action.data
            return {...homeInfo}
      default:
            return prState
    }
}
//识物里的数据
const initShiWu = {}
function shiWuInfo(preState = initShiWu,action) {
    switch (action.type){
      case RECEIVE_SHIWU_INFO:
        const shiWuInfo = action.data
        return {...shiWuInfo}
      default:
        return preState
    }
}

//分类里的数据
const initCategory = []
function categoryInfo(preState = initCategory,action) {
  switch (action.type){
    case RECEIVE_CATEGORY_INFO:
      const cateGoryInfo = action.data
      return cateGoryInfo
    default:
      return preState
  }
}
//分类里右边的列表数据
const initDetails = {}
function detailsInfo(preState = initDetails,actions) {
  switch (actions.type){
    case RECEIVE_DETAILS_INFO:
      const detailsInfo = actions.data
      return {...detailsInfo}
    default:
      return preState
  }
}

export default combineReducers({
  homeInfo,
  shiWuInfo,
  categoryInfo,
  detailsInfo
})
/*
1. 向外暴露是一个整合后的reducer函数: function (state, action)
2. state的结构为: {xxx: xxx(), yyy: yyy()}
 */