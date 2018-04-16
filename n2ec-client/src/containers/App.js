import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import Main from '../components/Main'
import './App.css'

const App = () => (
    <MuiThemeProvider>
        <div className="App">
            <TopBar />
            <Main />
            <Footer />
        </div>
    </MuiThemeProvider>
)

export default App