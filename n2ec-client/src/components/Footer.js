import React from 'react'

const Footer = () => (
    <div>
        <p style={styles.para}>Developed by Merril Jeffs</p>
        <div style={styles.footerContent}>
            <a href='mailto:merrilj@yahoo.com'>
                <i style={styles.icon} className="footer far fa-envelope"></i>
            </a>
            <a href='https://www.linkedin.com/in/merrilj/' target='_blank' rel='noopener noreferrer'>
                <i style={styles.icon} className="footer fab fa-linkedin-in"></i>
            </a>
        </div>
    </div>
)

export default Footer

const styles = {
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