import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'

import './Contact.css'

const contacts = [
    {name: 'Nathan Jeffs', email: 'nathan@n2ec.com'},
    {name: 'Nick Holloway', email: 'nick@n2ec.com'}    
]

const Contact = () => (
    <div className='contact-main'>
        <h2>Get in Touch</h2>
        <div className='contact-cards'>
            {contacts.map((el, i) => (
                <div key={i}>
                    <ContactCard contact={el} style={styles.smallCard} />
                </div>
            ))}

            <div style={{width: '100%', margin: '1rem 1rem'}}>
                <div style={styles.avatarDiv}>
                    <a href='tel:18063914464'>
                        <Avatar className='contact-avatar'>
                            <i style={{fontSize: '1.5rem'}} className="fas fa-phone"></i>
                        </Avatar>
                    </a>
                    <p className='contact-para'>Call us at (806) 391-4464</p>
                </div>
                <Divider style={{width: '75%', margin: '1rem auto'}}/>
                <div style={styles.avatarDiv}>
                    <a href='mailto:18052756232'>
                        <Avatar className='contact-avatar'>
                            <i style={{fontSize: '1.5rem'}} className="far fa-envelope"></i>
                        </Avatar>
                    </a>
                    <p className='contact-para'>
                        If you're interested in working with us feel free to attach a resume and send us a message
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default Contact

const ContactCard = ({ contact }) => (
    <div className='contact-card' style={styles.smallCard}>
        <h2 style={{margin: 0}}>{contact.name}</h2>
        <a href={`mailto:${contact.email}`}>
            <h4 style={{margin: 0}}>{contact.email}</h4>
        </a>
    </div>
)

const styles = {
    smallCard: {
        margin: '1rem',
        width: '15rem',
        height: '7rem'
    },
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