import React, {Component} from 'react'

import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'
export class App extends Component {
/*
*  这里的评论数据CommentAdd会用到，CommentList也会用到，因此状态数据应该放在他们
*  公共的父组件中，即App中，状态数据在构造器中进行初始化
*
*
*
*
***/
  // constructor (props) {
  //   super(props)
  //
  //   // 初始化状态
  //   this.state = {
  //     comments: [
  //       {username: 'Tom', content: 'react 挺好的'},
  //       {username: 'Jack', content: 'react还行'}
  //     ]
  //   }
  // }

  // 不显示的调用构造器也可以初始化状态，不是状态是在构造器中进行初始化的吗？没有构造器怎么初始化？有简写的方式，如下：

  state = { // 这样的写法是给组件对象添加属性，组件对象不是组件类，也就是说这里指得组件对象不是app类，而是他的实例this, 他有一个初始状态state，默认为null，这里讲默认的值覆盖了
    comments: [ // 这里定义的数据不是给当前组件用的，而是给子组件用的，因此需要传递到子组件
       {username: 'Tom', content: 'react 挺好的'},
       {username: 'Jack', content: 'react还行'}
    ]
  }

  // 这个函数app组件不用，需要传递到子组件执行
  addComment = (comment) => {
    const {comments} = this.state

    comments.unshift(comment)

    // 更新状态
    this.setState({comments})
  }

  // 删除评论
  deleteComment = (index) => {
    const {comments} = this.state
    comments.splice(index, 1)

    // 更新状态
    this.setState({comments})
  }

  render () {

    const {comments} = this.state

    return (
      <div>
        <header class="site-header jumbotron">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1>请发表对React的评论</h1>
            </div>
          </div>
        </div>
        </header>
        <div class="container">
          <CommentAdd addComment={this.addComment}/>
          <CommentList comments={comments} deleteComment={this.deleteComment}/>
        </div>
      </div>
    )
  }
}
