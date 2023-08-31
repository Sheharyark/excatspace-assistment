import React from 'react'

const Post = React.forwardRef(({ post }, ref) => {
  const postBody = (
    <div className='card-group'>
      <div className='card'>
        <img src={post.url} class='card-img-top' alt='...'></img>
        <div class='card-body'>
          <h5 class='card-title'>{post.author}</h5>
        </div>
      </div>
    </div>
  )

  const content = ref ? (
    <article ref={ref}>{postBody}</article>
  ) : (
    <article>{postBody}</article>
  )

  return content
})

export default Post
