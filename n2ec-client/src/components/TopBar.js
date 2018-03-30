import React from 'react'
import AppBar from 'material-ui/AppBar'

const TopBar = () => (
    <AppBar
        style={styles.topBar}
        showMenuIconButton={false}
        titleStyle={styles.title}
        title="N2 Electrical Contractors, LLC"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
)

export default TopBar

const styles = {
    topBar: {
        backgroundColor: '#fff'
    },
    title: {
        color: '#000'
    }
}