import Mock from 'mockjs'
import fenlei from '../data/datanav.json'
import home from '../data/datahome.json'
import shiwu from '../data/datashiwu.json'

Mock.mock('/category', {code: 0, data: fenlei.categoryL1List})
Mock.mock('/home', {code: 0, data: home})
Mock.mock('/shiwu', {code: 0, data: shiwu})
