import React,{Component} from 'react'
import PropTypes from 'prop-types'


export default class CommentAdd extends Component{


  static propTypes = {
    addComment: PropTypes.func.isRequired
  }

  state = {
    username: '',
    content: ''
  }


  // 注意事件里面绑定的函数是自己定义的，其内部的this不是组件对象，之前的使用方式是通过bind的方式修正了this，
  // 但是那种方式比较烦，这里通过箭头函数就能很好的解决掉this的问题,因为箭头函数没有自己的this，因此能访问到的this只能外围的this，react中正好是组件对象
  handleSubmit = () => {
    /*
    1. 收集表单数据()，受控和非受控，建议用受控，受控组件要有状态
    ******/
    const comment = this.state

    // 更新state， 数据在哪里定义，则修改数据的行为也在哪里
    this.props.addComment(comment)

    // 清除输入数据
    this.setState({
      username: '',
      content: ''
    })
  }

  handleNameChange = (event) => {
    const username = event.target.value
    this.setState({username})
  }

  handleConentChange = (event) => {
    const content = event.target.value
    this.setState({content})
  }

  render () {

    const {username, content} = this.state


    return (
      <div class="col-md-4">
        <form class="form-horizontal">
          <div class="form-group">
            <label>用户名</label>
            <input type="text" class="form-control" placeholder="用户名" value={username} onChange={this.handleNameChange}/>
          </div>
          <div class="form-group">
            <label>评论内容</label>
            <textarea class="form-control" rows="6" placeholder="评论内容" value={content} onChange={this.handleConentChange}></textarea>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="button" class="btn btn-default pull-right" onClick={this.handleSubmit}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
