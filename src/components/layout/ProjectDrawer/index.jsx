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

const ProjectDrawer = ({ projectData }) => {
    const dateOptions = {
        year: "numeric",
        month: "short"
    }
    return (
        <Drawer snapPoints={SNAP_POINTS} showSwipeHandle>
            <DrawerTrigger render={<Button variant="outline" />}>Open</DrawerTrigger>
            <DrawerContent className="max-w-2xl mx-auto h-max z-30">
                <div className="max-h-[80vh] m-6">
                    <div className="flex flex-wrap gap-2 justify-between">
                        <img
                            src="https://avatar.vercel.sh/shadcn1"
                            alt="Event cover"
                            className="aspect-video max-w-96 w-[50%] object-cover brightness-60 grayscale dark:brightness-40"
                        />
                        <DrawerHeader className="flex flex-col flex-wrap max-w-72 w-[50%] p-0">
                            <DrawerTitle className="text-lg font-bold text-left">
                                {projectData.name}
                            </DrawerTitle>
                            <DrawerDescription className={'text-left text-sm'}>
                                Role-based management system for tracking courses, students, and instructor records.
                            </DrawerDescription>
                            <div className="mt-6 flex justify-start">
                                <i className="text-gray-400 text-[12px]">{projectData?.date_started?.toLocaleDateString("en-US", dateOptions)} (Started) -</i>
                                <i className="text-gray-400 text-[12px]">{projectData?.expected_end?.toLocaleDateString("en-US", dateOptions)} (expected-end)</i>
                            </div>
                        </DrawerHeader>
                    </div>
                    <div className="py-6 flex flex-row gap-2">
                        <div className="flex-1">
                            <strong>Features</strong>
                            <ul className="list-disc m-auto px-6 py-2 flex flex-col gap-2">
                                {

                                    projectData?.features?.map((e) => (
                                        <li>{e}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="flex-1">
                            <strong>Remaining Work</strong>
                            <ul className="list-disc px-6 py-2 flex flex-col gap-2">
                                {

                                    projectData?.remaining?.map((e) => (
                                        <li>{e}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <DrawerFooter className="px-0 flex-row gap-4 w-full">
                        <Button className="flex-1">
                            Close
                        </Button>
                        {/* <Button variant="outline" asChild className="flex-1">
                            <a href="https://github.com/your-repo" target="_blank" rel="noreferrer">
                                <SiGithub />
                            </a>
                        </Button> */}
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default ProjectDrawer
