import StackedList from '@/components/layout/StackedList'
import { education } from '@/data'
import React from 'react'

const Education = () => {
  return (
    <>
      <StackedList eduData={education}/>
    </>
  )
}

export default Education
