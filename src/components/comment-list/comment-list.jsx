import React, {Component} from 'react'

import PropTypes from 'prop-types'
import CommentItem from '../comment-item/comment-item'

import './commentList.css'

// import CommentItem from '../comment-item/comment-item'

export default class CommentList extends Component {


  // 这种简写的方式是给组件类添加属性， 如果没有static修饰则为给组件对象添加
  static propTypes = {
    comments: PropTypes.array.isRequired,
    deleteComment: PropTypes.func.isRequired
  }

  render () {

    // 使用前先将其拿出来，
    const {comments, deleteComment} = this.props
    let display = comments.length == 0 ? 'block' : 'none'

    return (
      <div class="col-md-8">
        <h3 class="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul class="list-group">
          {
            comments.map((comment, index) => {
              return (
                <CommentItem comment={comment} deleteComment={deleteComment} index={index} key={index}/>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

// 组件在接受属性props前需要先声明,声明前需要保证装了一个插件prop-tyoes  通过npm install --save prop-types安装
// 这种方式不太好，不建议，应该写在组件内部，但是要注意，这个验证是加在组价类上的，不是组件对象，需要用static关键字来声明

/*****
CommentList.propTypes = {
  /**comments: PropTypes.array.isRequired
}



********/
