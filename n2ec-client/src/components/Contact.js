import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'

import './Contact.css'
import N2Logo from './N2Logo'

const contacts = [
    {name: 'Nathan Jeffs', email: 'nathan@n2ec.com'},
    {name: 'Nick Holloway', email: 'nick@n2ec.com'}    
]

const Contact = () => (
    <div className='contact-main'>
        <p style={{fontSize: '1.3rem', margin: '0.8rem', fontWeight: 'lighter'}}>Get in Touch</p>
        <div className='contact-cards'>
            {contacts.map((el, i) => (
                <div key={i}>
                    <ContactCard contact={el} style={styles.smallCard} />
                </div>
            ))}
        </div>
            <div style={{maxWidth: '30rem', margin: '1rem 1rem'}}>
                <div style={styles.avatarDiv}>
                    <a href='tel:18063914464'>
                        <Avatar className='contact-avatar'>
                            <i style={{fontSize: '1.5rem'}} className='fas fa-phone'></i>
                        </Avatar>
                    </a>
                    <p className='contact-para'>Call us at (806) 503-7323</p>
                </div>
                <Divider style={{margin: '1rem auto'}}/>
                <div style={styles.avatarDiv}>
                    <a href='mailto:nathan@n2ec.com'>
                        <Avatar className='contact-avatar'>
                            <i style={{fontSize: '1.5rem'}} className='far fa-envelope'></i>
                        </Avatar>
                    </a>
                    <p className='contact-para'>
                        If you're interested in working with us feel free to attach a resume and send us a message
                    </p>
                </div>
            </div>
    </div>
)

export default Contact

const ContactCard = ({ contact }) => (
    <div className='contact-card' style={styles.smallCard}>

        <N2Logo className='contact-logo' />
        <div style={{borderLeft:'1px solid #EA1E25', height:'90%'}} />

        <div style={{textAlign: 'center', width: 150}}>
            <h3 style={{margin: 0}}>{contact.name}</h3>
            <a href={`mailto:${contact.email}`}>
                <h4 style={{margin: 0}}>{contact.email}</h4>
            </a>
        </div>
    </div>
)

const styles = {
    avatar: {
        height: '60px',
        width: '60px',
        color: '#000',
        backgroundColor: '#fff',
        borderStyle: 'solid'
    },
    avatarDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}