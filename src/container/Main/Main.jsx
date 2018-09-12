import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom'

import Category from '../../container/Category/Category';
import Knowledge from '../../container/Knowledge/Knowledge';
import Msite from '../../container/Msite/Msite';
import Profile from '../../container/Profile/Profile';
import ShopCart from '../../container/ShopCart/ShopCart';
import NavFooter from '../../components/NavFooter/NavFooter'

export default class Main extends Component {
  render() {
    return (
      <div className='body'>
        <Switch>
          <Route path='/msite' component={Msite}/>
          <Route path='/knowledge' component={Knowledge}/>
          <Route path='/category' component={Category}/>
          <Route path='/shopCart' component={ShopCart}/>
          <Route path='/profile' component={Profile}/>
          <Route component={Msite}/>
        </Switch>
        <NavFooter />
      </div>
    )
  }
}