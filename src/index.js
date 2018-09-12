import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.styl'
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import './mock/mockServer'
import store from './redux/store'
import './static/css/react.css'
import 'swiper/dist/css/swiper.min.css'

import Main from './container/Main/Main';
ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Main />
    </HashRouter>
  </Provider>
    ), document.getElementById('root'));
