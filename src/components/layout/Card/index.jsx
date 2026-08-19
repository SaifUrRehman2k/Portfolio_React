import IconBadge, { Badge, BadgeSM } from "@/components/ui/Badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@base-ui/react"
import { Clock } from "lucide-react"

export function CardImageWithList() {
    return (
        <Card className="relative grow max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
                src="https://avatar.vercel.sh/shadcn1"
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
                <CardAction>
                    <Badge badgeName={"Live"}/>
                </CardAction>
                <CardTitle>Weather App</CardTitle>
                <CardDescription>
                    A practical talk on component APIs, accessibility, and shipping
                    faster. A practical talk on component APIs, accessibility, and shipping
                    faster.
                </CardDescription>
            </CardHeader>
            <CardFooter>
                {/* <Button className="w-full">View Event</Button> */}
                <BadgeSM badgeName={"React.js"}/>
                <BadgeSM badgeName={"Tailwind"}/>
                <BadgeSM badgeName={"Shadcn"}/>
                <BadgeSM badgeName={"RestAPI"}/>
                <BadgeSM badgeName={"ReactLeaflet"}/>
                <BadgeSM badgeName={"React-Router"}/>
                <BadgeSM badgeName={"Redux"}/>
            </CardFooter>
        </Card>
    )
}

export function CardImageWithButtton(params) {
    return(
                <Card className="relative grow max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
                src="https://avatar.vercel.sh/shadcn1"
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
                <CardAction className={"col-span-1 row-span-1"}>
                    <span className="flex flex-row gap-2 ">
                        March 12
                        <Separator/>
                        <Clock size={16}/> 10 AM
                    </span>
                </CardAction>
                <CardTitle>Blog Title</CardTitle>
                <CardDescription className={'col-span-2'}>
                    A practical talk on component APIs, accessibility, and shipping
                    faster. A practical talk on component APIs, accessibility, and shipping
                    faster.
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button className="w-full">View Event</Button>
            </CardFooter>
        </Card>
    )
}

