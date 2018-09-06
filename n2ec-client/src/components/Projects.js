import React from 'react'

const Projects = () => (
    <div style={styles.main}>
        <div style={styles.outline}><h3><i>Projects coming soon</i></h3></div>
    </div>
)

export default Projects

const styles = {
    main: {
        minHeight: 'calc(100vh - 264px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    outline: {
        border: '1px solid #EA1E25',
        borderRadius: 10,
        padding: '1rem',
        margin: '1rem',
    }
}