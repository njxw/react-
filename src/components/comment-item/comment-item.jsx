import React,{Component} from 'react'
import PropTypes from 'prop-types'

import './commentItem.css'
export default class CommentItem extends Component {

  static propTypes = {
    comment: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
  }

  handleClick = () => {

    const {comment, deleteComment, index} = this.props
    // 先提示， 确定后删除
    if (window.confirm(`确定要删除${comment.username}的评论吗？`)) {
      deleteComment(index)
    }
  }

  render () {

    const {comment} = this.props

    return (
      <li class="list-group-item">
        <div class="handle">
          <a href="javascript:;" onClick={this.handleClick}>删除</a>
        </div>
        <p class="user"><span >{comment.username}</span><span>说:</span></p>
        <p class="centence">{comment.content}</p>
      </li>
    )
  }
}
