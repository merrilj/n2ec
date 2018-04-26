import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import { Link } from 'react-router-dom'

export default class TopBar extends Component {

    render() {

        const navButtons = (
            <div style={styles.navButtonsDiv}>
                <h4 style={styles.navButtons}>
                    <Link to='/'>Home</Link>
                </h4>
                <h4 style={styles.navButtons}>
                    <Link to='/projects'>Projects</Link>
                </h4>
                <h4 style={styles.navButtons}>
                    <Link to='/contact'>Contact</Link>                    
                </h4>
            </div>
        )

        return (
            <div id='topBar'>
                <AppBar
                    style={styles.topBar}
                    showMenuIconButton={false}
                    titleStyle={styles.title}
                    title="N2 Electrical Contractors"
                    children={navButtons}
                />
            </div>
        )
    }
}

const styles = {
    topBar: {
        backgroundColor: '#fff',
        fontFamily: 'Monda, sans-serif',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        width: '100%'
    },
    title: {
        color: '#000'
    },
    navButtonsDiv: {
        display: 'flex',
        alignItems: 'center'
    },
    navButtons: {
        float: 'left',
        marginTop: 0,
        marginBottom: 0,
        marginLeft: '1em',
        fontWeight: 'lighter'
    }
}