import React from 'react'
import { Brand, Catagory, Colors, Price } from '../api/api'
import { SidebarDrop } from './SidebarDrop'

export const Sidebar = ({className}) => {
  return (
    <div className={className}>
      <SidebarDrop title="Shop by Category" heading={Catagory}/>
      <SidebarDrop title="Shop by Color" heading={Colors}/>
      <SidebarDrop title="Shop by Brand" heading={Brand}/>
      <SidebarDrop title="Shop by Price" heading={Price}/>
    </div>
  )
}