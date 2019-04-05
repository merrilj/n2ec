import React from 'react'
import Divider from '@material-ui/core/Divider'

import './Home.css'
import N2Logo from './N2Logo'

const Home = () => (
    <div className='home-main'>
        
        <N2Logo className='home-logo' />

        <div className='home-tagline'>
            <p className='home-license'>
                TECL 31364
            </p>
            <Divider style={{width: '50%'}} />
            <h3 style={{margin: 0}}>
                <i>Trusted by the best</i>
            </h3>
        </div>

    </div>
)

export default Home