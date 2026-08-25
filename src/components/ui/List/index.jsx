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
        <li key={data.institute} className="flex sm:flex-row flex-col sm:justify-between py-5 sm:h-32 h-max">
            <div className="flex sm:flex-row flex-col min-w-0 sm:gap-x-4 gap-0">
                <img alt="" src={'xyz'} className="size-auto m-0 flex-none rounded-full bg-gray-50" />
                <div className="min-w-0 flex flex-col">
                    <h4 className="m-0">{data.institute}</h4>
                    <p className="mt-1 truncate"> {data.degree}</p>
                </div>
            </div>
            <div className="shrink-0 flex flex-col sm:items-end ">
                <h5 className="m-0">{data.year}</h5>
                <span className="mt-1 text-xs/5">
                    Grade: {data.score}
                </span>


            </div>
        </li>
    )
}
