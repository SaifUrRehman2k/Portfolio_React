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
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ProjectDrawer(props) {
    const data = props.projectData
    const dateOpt = {
        month: "short",
        year: "numeric"
    }
    return (
        <Drawer>
            <DrawerTrigger render={
                <Button variant="outline">View Details</Button>
            } />

            <DrawerContent className="max-w-2xl mx-auto">
                <div className="p-6 overflow-y-auto max-h-[80vh]">
                    <DrawerHeader className="px-0">
                        <DrawerTitle className="text-2xl text-left font-bold">
                            {data.name}
                        </DrawerTitle>
                        <DrawerDescription className={"text-left text-[12px] italic"}>
                            {data.date_started?.toLocaleDateString("en-US", dateOpt)}
                            -
                            {
                                data.date_ended
                                    ?
                                    data.date_ended?.toLocaleDateString("en-US", dateOpt)
                                    :
                                    data.expected_end?.toLocaleDateString("en-US", dateOpt)
                            }
                            <span className="text-sm text-gray-400 font-light mx-2">
                                {
                                    data.date_ended
                                        ?
                                        '(Completed)'
                                        :
                                        '(On-going)'

                                }
                            </span>
                        </DrawerDescription>
                    </DrawerHeader>

                    {/* Tech Stack Badges */}


                    {/* Core Features / Detailed Breakdown */}
                    <div className="space-y-4 my-6 text-sm text-muted-foreground">
                        <h4 className="text-base font-semibold text-foreground">Key Architecture & Features</h4>
                        <ul className="list-disc pl-5 space-y-2">
                            {
                                data.features.map((e) => (
                                    <li>
                                        <strong>{e}</strong>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>

                    <DrawerFooter className="px-0 flex-row gap-4">
                        <DrawerClose render={<Button>Close</Button>} />
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}