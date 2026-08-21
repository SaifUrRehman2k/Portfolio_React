import { CardImageWithButtton } from '@/components/layout/Card'
import BlogsList from '@/components/sections/BlogLists'
import React from 'react'

const Blog = () => {
  return (
    <div className='flex flex-col h-max'>
      <h1 className='mt-0'>Blog</h1>
      <BlogsList/>
    </div>
  )
}

export default Blog
