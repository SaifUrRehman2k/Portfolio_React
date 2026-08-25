import { CardImageWithList } from '@/components/layout/Card'
import { Badge, BadgeSM } from '@/components/ui/Badge'
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import { projects } from '@/data'
import React from 'react'

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
                {/* <CardImageWithList />
                <CardImageWithList />
                <CardImageWithList />
                <CardImageWithList /> */}

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
                                Live
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
                                {/* <Button className="w-full">View Event</Button> */}
                                <BadgeSM badgeName={"React.js"} />
                                <BadgeSM badgeName={"Tailwind"} />
                                <BadgeSM badgeName={"Shadcn"} />
                                <BadgeSM badgeName={"RestAPI"} />
                                <BadgeSM badgeName={"ReactLeaflet"} />
                                <BadgeSM badgeName={"React-Router"} />
                                <BadgeSM badgeName={"Redux"} />


                            </CardFooter>
                        </Card>
                    ))
                }

            </div>
        </div>
    )
}

export default Projects
