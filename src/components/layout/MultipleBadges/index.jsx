import IconBadge from '@/components/ui/Badge'
import React from 'react'
import reactIcon from '../../../assets/react.svg'
import jsIcon from '../../../assets/js.svg'
import firebaseIcon from '../../../assets/firebase.svg'
import tailwindIcon from '../../../assets/tailwind.svg'
import gitIcon  from '../../../assets/github.svg'

const MultipleBadges = () => {
    return (
        <>
            <IconBadge icon={reactIcon} badgeName={"React.js"} />
            <IconBadge icon={jsIcon} badgeName={"JavaScript"} />
            <IconBadge icon={firebaseIcon} badgeName={"Firebase"} />
            <IconBadge icon={tailwindIcon} badgeName={"Tailwind"} />
            <IconBadge icon={gitIcon} badgeName={"Git/Github"} />

        </>
    )
}

export default MultipleBadges
