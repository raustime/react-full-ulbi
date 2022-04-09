import React, { useState } from 'react'
import PostForm from './components/PostForm'
// import Counter from './components/Counter'
import PostList from './components/PostList'
import MySelect from './components/UI/select/MySelect'

import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', description: 'Description' },
    { id: 2, title: 'JavaScript', description: 'Description' },
    { id: 3, title: 'JavaScript', description: 'Description' },
  ])

  // const [title, setTitle] = useState('')
  // const [description, setDescription] = useState('')

  // const bodyInputRef = useRef()
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MySelect
          defaultValue='Сортувати по'
          options={[
            { value: 'title', name: 'по назві' },
            { value: 'description', name: 'по опису' },
          ]}
        />
      </div>

      {posts.length ? (
        <PostList remove={removePost} posts={posts} title={'Перелік 1'} />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Постів немає</h1>
      )}
    </div>
  )
}

export default App
