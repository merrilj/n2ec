import React from 'react'

const Main = () => (
    <div>
        <Logo />
    </div>
)

const Logo = () => (
    <div style={styles.logoDiv}>
        <img src={require('../images/n2ec-logo.png')} style={styles.logo} alt='N2 logo' />
    </div>
)

export default Main

const styles = {
    logoDiv: {
        display: 'flex',
        justifyContent: 'center'
    },
    logo: {
        height: '50%',
        width: '50%'
    }
}