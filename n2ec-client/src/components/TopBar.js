import React from 'react'
import MediaQuery from 'react-responsive'
import { Link } from 'react-router-dom'

import './TopBar.css'

const TopBar = () => (
    <div className='main'>
        <h2 style={{margin: 0}}>
            <MediaQuery query="(min-width: 600px)">
                N2 Electrical Contractors
            </MediaQuery>
            <MediaQuery query="(max-width: 599px)">N2EC</MediaQuery>
        </h2>
        <div className='nav-buttons-div'>
            <h4 className='nav-buttons'>
                <Link to='/'>Home</Link>
            </h4>
            <h4 className='nav-buttons'>
                <Link to='/projects'>Projects</Link>
            </h4>
            <h4 className='nav-buttons'>
                <Link to='/contact'>Contact</Link>                    
            </h4>
        </div>
    </div>
)

export default TopBar