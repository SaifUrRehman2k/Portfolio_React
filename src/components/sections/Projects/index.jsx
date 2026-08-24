import { CardWithList } from '@/components/layout/Card'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import React from 'react'

const Projects = () => {
    return (
        <div className='w-full flex flex-col flex-wrap py-16'>
            <div className='flex flex-col flex-wrap items-center justify-around sm:w-[70%] w-full m-auto py-8'>
                <InteractiveHoverButton>
                    My Projects
                </InteractiveHoverButton>
                <h1>Check out my latest work.</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates quisquam tempora perferendis corrupti, voluptatum fuga voluptatibus eveniet ducimus nostrum velit molestiae officiis ab sint officia sit, quam tempore est.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <CardWithList />
                <CardWithList />
                <CardWithList />
                <CardWithList />

            </div>
        </div>
    )
}

export default Projects
