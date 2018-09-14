import React,{Component} from 'react';
class GoTop extends Component{
  state = {
    scrollTop: 600
  }
  toTop = () => {
    if (this.timer){
      return
    }
    let top = document.body.scrollTop
    this.timer = setInterval( () =>  {
      document.body.scrollTop = document.documentElement.scrollTop =  top;
      this.setState({
        scrollTop: top
      })
      if (top <= 0){
        clearInterval(this.timer)
        this.timer = null
      }
      top-=20
    })
  }
  render(){
    return (
      <div className="to-top" onClick={this.toTop} >
        <i className="iconfont icon-arrowup"></i>
      </div>
    )
  }
}
export default GoTop;