import React from 'react'

const Footer = () => (
    <div style={styles.main}>
        <p style={styles.para}>Developed by Merril Jeffs</p>
        <div style={styles.footerContent}>
            <i style={styles.icon} className="fab fa-linkedin-in"></i>
            <i style={styles.icon} className="fab fa-github"></i>
            <i style={styles.icon} className="far fa-envelope"></i>
        </div>
    </div>
)

export default Footer

const styles = {
    main: {
        boxSizing: 'border-box',
        height: '200px',
        backgroundColor: '#eee',
        borderTop: '1px solid #e0e0e0',
        paddingTop: '45px'
    },
    footerContent: {
        display: 'flex',
        justifyContent: 'center'
    },
    para: {
        textAlign: 'center',
        color: '#767676',
        marginBottom: '0.2em'
    },
    icon: {
        margin: '0.2em',
        fontSize: '1.5em',
        color: '#767676'
    }
}