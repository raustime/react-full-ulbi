import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'
const PostForm = ({create}) => {
    const [post, setPost] = useState({ title: '', description: '' })

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost={
             ...post, 
             id: Date.now() 
        }
        create(newPost)
        setPost({ title: '', description: '' })
      }
  return (
    <form>
        {/* управляемый компонент*/}
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type='text'
          placeholder='назва'
        />
        <MyInput
          value={post.description}
          onChange={(e) => setPost({ ...post, description: e.target.value })}
          type='text'
          placeholder='опис'
        />
        {/* неуправляемый компонент*/}
        {/* <MyInput ref={bodyInputRef} type='text' placeholder='опис' /> */}
        <MyButton onClick={addNewPost}>Створити пост</MyButton>
      </form>
  )
}

export default PostForm