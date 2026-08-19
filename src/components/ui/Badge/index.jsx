import React from 'react'

const IconBadge = ({ icon, badgeName }) => {
    return (
        <span className="flex items-center justify-around max-w-40 w-max gap-2 rounded-full bg-gray-500/10 dark:bg-gray-50/10 px-4 py-2 text-gray-600 dark:text-gray-100 inset-ring inset-ring-gray-600/20">
            {/* <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> */}
            <img className='h-8 w-8 m-0' src={icon} alt="react.svg" />
            {badgeName}
        </span>
    )
}

export default IconBadge

export const Badge = ({ badgeName }) => {
    return (
        <span className="flex items-center justify-around max-w-40 w-max rounded-full bg-gray-500/10 dark:bg-gray-50/10 px-4 py-2 text-gray-600 dark:text-gray-100 inset-ring inset-ring-gray-600/20">
            {badgeName}
        </span>
    )
}

export const BadgeSM = ({ badgeName }) => {
    return (
        <span className="flex items-center justify-around max-w-40 w-max rounded-full bg-gray-500/10 dark:bg-gray-50/10 px-2 py-1 text-gray-600 dark:text-gray-100 inset-ring inset-ring-gray-600/20 text-sm">
            {badgeName}
        </span>
    )
}