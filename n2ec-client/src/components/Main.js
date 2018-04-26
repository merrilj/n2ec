import React from 'react'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import { Switch, Route } from 'react-router-dom'
import Contact from './Contact'
import Projects from './Projects'

const Main = () => (
    <div style={styles.main}>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
    </div>
)

const Home = () => (
    <div>
        <div style={styles.logoDiv}>
            <img src={require('../images/n2ec-logo.png')} className='logo' alt='N2 logo' />
        </div>
        <Paper style={styles.paper} zDepth={2}>
            <h2 style={{marginBottom: 0}}><b>Trusted Commercial Expert Electricians</b></h2>
            <Divider style={{width: '50%'}} />
            <p style={styles.licensePara}><i>TECL 31364</i></p>
        </Paper>
    </div>
)

export default Main

const styles = {
    main: {
        marginRight: '1em',
        marginLeft: '1em',
        // marginTop: '64px'
    },
    logoDiv: {
        display: 'flex',
        justifyContent: 'center'
    },
    logo: {
        maxHeight: '80%',
        maxWidth: '80%',
    },
    paper: {
        height: '10rem',
        maxWidth: '40rem',
        margin: '0 auto',
        marginBottom: '5em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Monda, sans-serif',
        color: '#767676'
    },
    licensePara: {
        marginTop: 0,
        fontSize: '1.5em'
    }
}