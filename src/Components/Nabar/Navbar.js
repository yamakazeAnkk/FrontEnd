import React, { useState } from 'react'
import "./Navbar.css"
import {Link, useLocation, useMatch, useResolvedPath } from 'react-router-dom'


export default function Navbar() {
    const [search, setSearch] = useState("");

  // Hàm để xử lý sự kiện thay đổi của thanh tìm kiếm
    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    // Hàm để xử lý sự kiện nhấn phím enter của thanh tìm kiếm
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
        // Thực hiện hành động tìm kiếm ở đây
        console.log("Searching for", search);
        }
    };
  return (
      <nav className='nav'>
      <Link to='/' className="site-title">
        WeStudy
      </Link>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="search-bar"
      />
      <ul>
        <CustomLink to='/price'>About</CustomLink>
        <CustomLink to='/about'>help</CustomLink>

      </ul>
    </nav>
   
  )
}

function CustomLink({to,children,...props}){
  const resolvedPath = useResolvedPath(to)
  const location = useLocation()
  const isActive = useMatch({path: resolvedPath.pathname,end: true,location : location})
  return(
    <li className = {isActive ? "active": ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}


