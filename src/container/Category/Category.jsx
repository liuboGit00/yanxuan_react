import React,{Component} from 'react';
import {connect} from 'react-redux'

import Search from '../../components/Search/Search'
import List from '../../components/List/List'

export default class Category extends Component{
    render(){
        return (
            <div>
                <Search />
                <List />
            </div>
        )
    }
}


