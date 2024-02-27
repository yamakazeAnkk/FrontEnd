
import 'bootstrap/dist/css/bootstrap.css';
import DataSideBar from '../../Icons/DataSideBar';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';


export default function Sidebar({children}) {
  return (
    <div className='container'>
    <div className="sidebar-container">
        <ul className='nav-list'>
          {DataSideBar.map((item,index)=>{
            return (
              <li className='nav-item' key={index}>
                <NavLink to={item.path} ClassName={({isActive})=>["nav-link",isActive ? "active" : null].join("")}>
                  <div className='nav-link-icon'>
                    {item.icon}
                  </div>
                  <span>
                    {item.title}
                  </span>
                </NavLink>

              </li>
            )
          }
          )}
        </ul>
      </div>
        <main>{children}</main>
    </div>

  )
}
