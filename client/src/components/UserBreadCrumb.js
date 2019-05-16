import React from 'react';
import { NavLink } from 'react-router-dom';


class UserBreadCrumb extends React.Component {
    render() {
        return(
            <div>
               
               <div>
                    <nav className='nav' aria-label='breadcrumb'>
                        <div className='container' >
                        {/* <NavLink to='/home' className='navbar-brand' style={{color: "purple"}}> <FaEnvira/> </NavLink> */}
                            <ul className='breadcrumb nav right'>
                                    <li className='breadcrumb-item'><NavLink to='/home' >home</NavLink></li>
                                    <li className='breadcrumb-item'><NavLink to='/browseitems' >browse items</NavLink></li>
                                    <li className='breadcrumb-item'><NavLink to='/dashboard' >dashboard</NavLink></li>
                                    <li className='breadcrumb-item'><NavLink to='/growstuff' >grow stuff</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                    <hr />
                </div>
            </div>
        )
    }
}

export default UserBreadCrumb ;

                    


