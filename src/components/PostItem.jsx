import React from 'react'
import MyButton from './UI/button/MyButton'

export default function PostItem(props) {
  return (
    <div className='post'>
        <div className='post__content'>
          <strong>{props.number}. {props.post.title}</strong>
          <div>{props.post.description}</div>
        </div>
        <div className='post__btns'>
          <MyButton onClick={e=>props.remove(props.post)}>Видалити</MyButton>
        </div>
      </div>
  )
}
