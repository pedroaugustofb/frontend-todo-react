import React from 'react'

const Menu = (props) => {
    return(
        <nav className='navbar navbar-inverse bg-inverse' >
            <div className='container'>
                <div className='navbar-header'>
                    <a className='navbar-brand' href="/todos">
                        <i className='fa fa-calendar-check-o'></i>
                    </a>
                </div>

                <div id="navbar" className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li><a href="/todos">To do's</a></li>
                        <li><a href="/outros">Outros</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu