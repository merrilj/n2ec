import React from 'react'
import Divider from '@material-ui/core/Divider'
import { Switch, Route } from 'react-router-dom'
// import MediaQuery from 'react-responsive'

import N2Logo from './N2Logo'
import Contact from './Contact'
import Projects from './Projects'

const Main = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
    </div>
)

const Home = () => (
    <div style={styles.mainDiv}>
        
        <N2Logo styles={styles.logo} />

        <div style={styles.taglineDiv}>
            <p style={styles.licensePara}>
                <i>TECL 31364</i>
            </p>
            <Divider style={{width: '50%'}} />
            <h3 style={{margin: 0}}>
                <b>Trusted Commercial Expert Electricians</b>
            </h3>
        </div>
    </div>
)

export default Main

const styles = {
    mainDiv: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    taglineDiv: {
        marginTop: -130,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    logoDiv: {
        display: 'flex',
        justifyContent: 'center'
    },
    logo: {
        maxHeight: 476.5,
        maxWidth: 616,
        marginTop: -50
    },
    licensePara: {
        margin: 0,
        fontSize: '1.3em',
        color: '#EA1E25'
    }
}