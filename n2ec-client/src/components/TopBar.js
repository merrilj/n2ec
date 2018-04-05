import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

const TopBar = () => (
    <div className={styles.root}>
    <AppBar position="static" style={styles.topBar}>
        <Toolbar>
            <Typography variant="title" style={styles.title} >
                N2 Electrical Contractors, LLC
            </Typography>
            <div><Button style={styles.menuButtons}>Home</Button>
            <Button style={styles.menuButtons}>Contact</Button></div>
        </Toolbar>
    </AppBar>
    </div>
)

export default TopBar

const styles = {
    topBar: {
        backgroundColor: '#fff'
    },
    title: {
        color: '#000',
        fontFamily: 'Monda, sans-serif'
    },
    menuButtons: {
        flex: 1,
        color: '#000',
        backgroundColor: 'transparent'
    },
    root: {
        flexGrow: 1,
    }
}