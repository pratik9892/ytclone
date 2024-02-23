import React from 'react'
import { NavLink } from 'react-router-dom';

const SidebarItems = ({Homeitems,title}) => {
  return (
        <div className="py-4 border-b-[0.1px] border-[#272727] ">
          {title && (<h3 className='px-3 py-2'>{title}</h3>)}
          {Homeitems.map((item) => {
            return (
              <div className='w-full flex-col items-center justify-between  gap-10 hover:bg-[#272727] rounded-lg px-3 ' key={item.name}>
                <div className='flex items-center gap-4 py-2 '>
                <div >{item.icon}</div>
                <NavLink to={`${item.path}`}>{item.name}</NavLink>
                </div>
              </div>
            )
          })}
        </div>
  )
}

export default SidebarItems