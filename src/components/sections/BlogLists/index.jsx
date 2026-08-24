import { CardWithButton } from '@/components/layout/Card'
import React from 'react'

const BlogsList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-6 sm:px-12 px-2'>
      <CardWithButton classForParent='' />
      <CardWithButton classForParent='' />
      <CardWithButton classForParent='' />
      <CardWithButton classForParent='' />

    </div>
  )
}

export default BlogsList
