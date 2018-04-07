import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'

export default class TopBar extends Component {

    render() {

        const navButtons = (
            <div style={styles.navButtonsDiv}>
                <h4 style={styles.navButtons}>
                    <a href=''>Home</a>
                </h4>
                <h4 style={styles.navButtons}>
                    <a href=''>Contact</a>
                </h4>
            </div>
        )

        return (
            <AppBar
                style={styles.topBar}
                showMenuIconButton={false}
                titleStyle={styles.title}
                title="N2 Electrical Contractors, LLC"
                children={navButtons}
            />
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
        marginLeft: '1em'
    }
}


// .navbar {
//     overflow: hidden;
//     background-color: #333;
//     position: fixed; /* Set the navbar to fixed position */
//     top: 0; /* Position the navbar at the top of the page */
//     width: 100%; /* Full width */
// }