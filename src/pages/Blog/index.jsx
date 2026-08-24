import { CardButtonHorizontal } from '@/components/layout/Card'
import BlogsList from '@/components/sections/BlogLists'
import { Separator } from '@/components/ui/separator'
import { Clock } from 'lucide-react'
import React from 'react'

const Blog = () => {
  return (
    <>
      <h1 className='mt-0'>Blog</h1>
      <h2 className='my-8'>Featured</h2>
      <CardButtonHorizontal />
      
      <div className='flex flex-col h-max'>
        <h2 className='my-8'>Discover more</h2>
        <BlogsList />
      </div>
    </>
  )
}

export default Blog
