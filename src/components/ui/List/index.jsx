import React from 'react'

const ListContainer = ({ children }) => {
    return (
        <ul role="list" className="divide-y divide-gray-300 p-0 dark:divide-gray-700">
            {children}
        </ul>
    )
}

export default ListContainer

export const ListItem = ({ data }) => {
    return (
        <li key={data.email} className="flex justify-between py-5 h-32">
            <div className="flex min-w-0 gap-x-4">
                <img alt="" src={data.imageUrl} className="size-auto m-0 flex-none rounded-full bg-gray-50" />
                <div className="min-w-0 flex flex-col">
                    <h4 className="m-0">{data.name}</h4>
                    <p className="mt-1 truncate">{data.email}</p>
                </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <h4 className="m-0">{data.role}</h4>
                {data.lastSeen ? (
                    <span className="mt-1 text-xs/5">
                        Last seen <time dateTime={data.lastSeenDateTime}>{data.lastSeen}</time>
                    </span>
                ) : (
                    <div className="mt-1 flex items-center gap-x-1.5">
                        <div className="flex-none rounded-full p-1">
                            <div className="size-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <span>Online</span>
                    </div>
                )}
            </div>
        </li>
    )
}
