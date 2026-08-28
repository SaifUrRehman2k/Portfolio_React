import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import React from 'react'
import { SiChainlink, SiGithub, SiLinktree } from "react-icons/si"

const SNAP_POINTS = ["31rem", 1]

const ProjectDrawer = ({projectData}) => {
    return (
        <Drawer snapPoints={SNAP_POINTS} showSwipeHandle>
            <DrawerTrigger render={<Button variant="outline" />}>Open</DrawerTrigger>
            <DrawerContent className="max-w-2xl mx-auto h-max">
                {/* <img
                    src="https://avatar.vercel.sh/shadcn1"
                    alt="Event cover"
                    className="aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40 m-0"
                /> */}
                <div className="p-6 overflow-y-auto max-h-[80vh]">
                    <DrawerHeader className="px-0">
                        <DrawerTitle className="text-2xl font-bold text-left">
                            {projectData.name}
                        </DrawerTitle>
                        <DrawerDescription className={'text-left'}>
                            Role-based management system for tracking courses, students, and instructor records.
                        </DrawerDescription>
                    </DrawerHeader>

                    <ul>
                        {

                            projectData?.features?.map((e)=>(
                                <p>{e}</p>
                            ))
                        }
                    </ul>

                    <DrawerFooter className="px-0 flex-row gap-4">
                        <Button asChild className="flex-1">
                            <a href="https://your-demo.netlify.app" target="_blank" rel="noreferrer">
                                {/* <ExternalLink className="mr-2 h-4 w-4" /> Live Demo */}
                                <SiLinktree />
                            </a>
                        </Button>
                        <Button variant="outline" asChild className="flex-1">
                            <a href="https://github.com/your-repo" target="_blank" rel="noreferrer">
                                {/* <Github className="mr-2 h-4 w-4" /> Code Repository */}
                                <SiGithub />
                            </a>
                        </Button>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default ProjectDrawer
