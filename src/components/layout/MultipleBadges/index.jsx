import IconBadge from '@/components/ui/Badge'
import React from 'react'
import { skills } from '@/data'


const MultipleBadges = () => {
    return (
        <>
            {/* <IconBadge icon={reactIcon} badgeName={"React.js"} />
            <IconBadge icon={jsIcon} badgeName={"JavaScript"} />
            <IconBadge icon={firebaseIcon} badgeName={"Firebase"} />
            <IconBadge icon={tailwindIcon} badgeName={"Tailwind"} />
            <IconBadge icon={gitIcon} badgeName={"Git/Github"} /> */}
            {
                skills.map((e)=>(
                    <IconBadge icon={e.icon} badgeName={e.name} />
                ))
            }

        </>
    )
}

export default MultipleBadges
