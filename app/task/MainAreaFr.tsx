"use client"
import React from 'react'
import { useStore } from './useStore'
import { FaPlus } from 'react-icons/fa'
const MainAreaFr = () => {
    const { lists ,workspaces , todoText, todos ,setSelectedList , selectedList , selectedWorkspace ,setSelectedWorkspace , handleAddTodo , setTodoText} = useStore()
  return (
    <div className='flex-1 p-6'>
        <div className='mb-4'>
            <input className='border border-gray-300 rounded-md px-4 py-2 w-full' type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} placeholder="Add Todo" />

            <div className="mt-2 flex items-center">
                <select className='border border-gray-300 rounded-md px-4 py-2' name="" id="" value={selectedList} onChange={(e) => setSelectedList(e.target.value)}>
                    <option value="" disabled>Select List</option>
                    {lists.map((list) => (
                        <option key={list.name} value={list.name}>{list.emoji} {list.name}</option>
                    ))}
                </select>
                <select name="" value={selectedWorkspace} onChange={(e) => setSelectedWorkspace(e.target.value)} className='border border-gray-300 rounded-md px-4 py-2 ml-2' id="">
                    <option value="" disabled>Select Workspace</option>
                    {workspaces.map((workspace) => (
                        <option key={workspace.name} value={workspace.name}>{workspace.emoji} {workspace.name}</option>
                    ))}
                </select>

                <button className='bg-black text-white flex items-center border border-gray-300 rounded-md px-4 py-2 ml-2' onClick={handleAddTodo}>
                    <FaPlus />  Add
                </button>
            </div>

        </div>
    </div>
  )
}

export default MainAreaFr