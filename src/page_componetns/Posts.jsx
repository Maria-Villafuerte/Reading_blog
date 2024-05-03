import React, { useState } from 'react'
import casa from "../assets/casa.jpeg"
import Post_Item from './Post_Item'

const DUMMY_POSTS=[
  {
    id:'1',
    thumbnail: casa,
    category: 'educacion',
    title: 'las aventuras de lo loco',
    desc: 'dasasdasdaisdasfinsdpansdapidnasidn asdasd',
    authorId: 3
   },
   {
    id:'2',
    thumbnail: casa,
    category: 'educacion',
    title: 'las aventuras de lo loco',
    desc: 'dasasdasdaisdasfinsdpansdapidnasidn asdasd',
    authorId: 3
   },
   {
    id:'2',
    thumbnail: casa,
    category: 'educacion',
    title: 'las aventuras de lo loco',
    desc: 'dasasdasdaisdasfinsdpansdapidnasidn asdasd',
    authorId: 3
   },
   {
    id:'3',
    thumbnail: casa,
    category: 'educacion',
    title: 'las aventuras de lo loco',
    desc: 'dasasdasdaisdasfinsdpansdapidnasidn asdasd',
    authorId: 3
   },
   {
    id:'4',
    thumbnail: casa,
    category: 'educacion',
    title: 'las aventuras de lo loco',
    desc: 'dasasdasdaisdasfinsdpansdapidnasidn asdasd',
    authorId: 3
   },
   {
    id:'5',
    thumbnail: casa,
    category: 'educacion',
    title: 'las aventuras de lo loco',
    desc: 'dasasdasdaisdasfinsdpansdapidnasidn asdasd',
    authorId: 3
   },

]
const Posts = () => {
  const[posts, setPosts]= useState(DUMMY_POSTS)

  return (
    <section className="posts">
      {
        posts.map( ({id,thumbnail,category,title,desc,authorId})=> <Post_Item key={id} thumbnail= {thumbnail} 
        category={category} title={title} desc= {desc} authorId={authorId}   />)
      }
    </section>
  )
}

export default Posts