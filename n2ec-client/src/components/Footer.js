import React from 'react'

const Footer = () => (
    <div style={styles.main}>
        <p style={styles.para}>Developed by Merril Jeffs</p>
        <div style={styles.footerContent}>
            <a href='https://www.linkedin.com/in/merrilj/' target='_blank' rel='noopener noreferrer'><i style={styles.icon} className="fab fa-linkedin-in"></i></a>
            <a href='https://github.com/merrilj' target='_blank' rel='noopener noreferrer'><i style={styles.icon} className="fab fa-github"></i></a>
            <a href='mailto:merrilj@yahoo.com'><i style={styles.icon} className="far fa-envelope"></i></a>
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
        fontSize: '1.2em',
        color: '#767676'
    }
}