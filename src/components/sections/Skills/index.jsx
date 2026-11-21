import MultipleBadges from '@/components/layout/MultipleBadges'
import React from 'react'

const Skills = () => {
    return (
        <>
            <h3 className='m-0'>Skills</h3>
            <div className='flex flex-row flex-wrap gap-2 py-8 md:py-16 m-0'>
                <MultipleBadges />
            </div>
        </>
    )
}

export default Skills
