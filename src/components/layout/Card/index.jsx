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
import { Separator } from "@/components/ui/separator"
import { Clock } from "lucide-react"

export function CardImageWithList() {
    return (
        <Card className="relative grow m-auto max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
                src="https://avatar.vercel.sh/shadcn1"
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
                <CardAction>
                    <Badge badgeName={"Live"} />
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
                <BadgeSM badgeName={"React.js"} />
                <BadgeSM badgeName={"Tailwind"} />
                <BadgeSM badgeName={"Shadcn"} />
                <BadgeSM badgeName={"RestAPI"} />
                <BadgeSM badgeName={"ReactLeaflet"} />
                <BadgeSM badgeName={"React-Router"} />
                <BadgeSM badgeName={"Redux"} />
            </CardFooter>
        </Card>
    )
}

export function CardWithButton(params, classForParent) {
    return (
        <Card className={`relative grow pt-0${classForParent}`}>

            <CardHeader className={"h-max gap-4 flex flex-col items-start"}>
                <CardAction className={"col-span-1 row-span-1"}>
                    <small className="flex flex-row gap-2 text-muted-foreground items-center justify-center">
                        March 12
                        <Separator orientation="vertical" className={"bg-muted-foreground"} />
                        <Clock size={12} /> 10 AM
                    </small>
                </CardAction>
                <CardTitle>Helo my name is saif</CardTitle>
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

export function CardButtonHorizontal(params, classForParent) {
    return (
        <Card className="grid grid-cols-[1fr] items-start gap-4 mx-6">
            {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35" /> */}

            <CardHeader className={"h-max gap-8 md:grid flex flex-col"}>
                <CardAction>
                    <span className="flex flex-row gap-2 text-muted-foreground">
                        March 12
                        <Separator orientation="vertical" className={"bg-muted-foreground"} />

                        <Clock size={16} /> 10 AM
                    </span>
                </CardAction>
                <CardTitle>Blog Title</CardTitle>
                <CardDescription className={'row-start-2 col-span-2 col-start-1'}>
                    A practical talk on component APIs, accessibility, and shipping
                    faster. A practical talk on component APIs, accessibility, and shipping
                    faster.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam numquam fugit harum nobis ipsam. Reiciendis eaque sint sunt magni atque adipisci, ipsa itaque dolore amet consequatur, unde provident est et!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis excepturi culpa, unde debitis iure quis! Minus reiciendis eius fugit earum vel rerum fugiat voluptates doloremque libero labore! Necessitatibus, dignissimos placeat?
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button className="w-full">View Event</Button>
            </CardFooter>
        </Card>
    )
}

