/*
  发送信息
* */
import ajax from './ajax'

//主页信息
export const reqHomeInfo = () => ajax('/home')
//识物页面信息
export const reqShiwuInfo = () => ajax('/shiwu')
//分类信息
export const reqCategoryInfo = () => ajax('/category')

