import React from 'react'

export const SelectorComponent: React.FC<{data: any[], select: string, handleChange:any}> = ({data, select, handleChange}) => (
    <select
        className="x-xl bf-white border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        value={select}
        onChange={(e) =>
        handleChange( e.target.value)
        }
    >
    {data.map((value, i) => (
        <option key={i} value={value}>
            {value}
        </option>
    ))}
    </select>
)