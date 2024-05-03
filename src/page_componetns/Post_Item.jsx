import React from 'react'
import { Link} from 'react-router-dom'


const Post_Item = (postsID,category,title,desc,authorId,thumbnail) => {
  return (
    <article className="post">
      <div className="posts__thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="posts_content">
        <Link>
        </Link>

      </div>


    </article>
    
  )
}

export default Post_Item