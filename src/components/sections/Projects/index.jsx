import { CardImageWithList } from '@/components/layout/Card'
import { Badge, BadgeSM } from '@/components/ui/Badge'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import { projects } from '@/data'
import React from 'react'
import { DiGithub } from 'react-icons/di'
import { SiGithub } from 'react-icons/si'

const Projects = () => {
    const dateOptions = {
        year: "numeric",
        month: "short"
    }

    return (
        <div className='w-full flex flex-col flex-wrap py-16'>
            <div className='flex flex-col flex-wrap items-center justify-around sm:w-[70%] w-full m-auto py-8'>
                <InteractiveHoverButton>
                    My Projects
                </InteractiveHoverButton>
                <h1 className='text-center'>Check out my latest work.</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates quisquam tempora perferendis corrupti, voluptatum fuga voluptatibus eveniet ducimus nostrum velit molestiae officiis ab sint officia sit, quam tempore est.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    projects.map((project) => (
                        <Card className="relative grow m-auto max-w-sm pt-0 h-max">
                            {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35" /> */}

                            <img
                                src="https://avatar.vercel.sh/shadcn1"
                                alt="Event cover"
                                className=" z-0 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40 m-0"
                            />
                            <span className="absolute top-2 right-2 z-999 text-xs max-w-40 w-max rounded-full bg-red-500/10 dark:bg-red-50/10 px-2 py-1 text-gray-600 dark:text-gray-100 inset-ring inset-ring-gray-600/20" >
                                {/* {project.date_started.toLocaleString("en-US", options)} */}
                                {
                                    project.status
                                }
                            </span>
                            <CardHeader>
                                <CardTitle>{project.name}</CardTitle>
                                <CardDescription>
                                    A practical talk on component APIs, accessibility, and shipping
                                    faster. A practical talk on component APIs, accessibility, and shipping
                                    faster.
                                </CardDescription>

                            </CardHeader>
                            <CardFooter>
                                <strong className='m-0'>Technologies used:</strong>
                                <div className='flex flex-row flex-wrap w-full justify-start items-start gap-2'>
                                    {
                                        project.technologies.map((name) => (
                                            <BadgeSM badgeName={name} />
                                        ))
                                    }
                                </div>
                                <div className='flex flex-nowrap w-full justify-between mt-8'>
                                    <Button className="bg-blue-500 text-white hover:bg-blue-500/50 ">View Event</Button>
                                    <a >
                                        <Button variant="outline" size="icon">
                                            <SiGithub />
                                        </Button>
                                    </a>
                                </div>

                            </CardFooter>
                        </Card>
                    ))
                }

            </div>
        </div>
    )
}

export default Projects
