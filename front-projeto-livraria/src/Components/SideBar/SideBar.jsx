import React from 'react'
import Item from './Item'
import './css/SideBar.css'
import { IoHomeOutline, IoLibraryOutline } from "react-icons/io5";
import { BiCategory } from 'react-icons/bi'

function SideBar() {
    return (
        <div className='sidebar'>
            <div className="sidebar-logo">
                <IoLibraryOutline size={25} className='logo-icon'/>
                <h2>OxeLib</h2>
            </div>

            <div className="sidebar-items">
                <ul>
                    <Item href = "/" icon = {<IoHomeOutline/>} title = 'Home'/>
                    <Item href="#" icon = {<BiCategory/>} title = 'Category' />
                </ul>
            </div>

        </div>
    )
}

export default SideBar