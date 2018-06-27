import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import Main from '../components/Main'
import './App.css'

const App = () => (
    <MuiThemeProvider>
        <div id='container'>
            <div id='topBar'>
                <TopBar />
            </div>

            <div id='main'>
                <Main />
            </div>

            <div id='footer'>
                <Footer />
            </div>
        </div>
    </MuiThemeProvider>
)

export default App

// make Nate's stuff black and white 
// trusted black tecl red
// divider between call and email