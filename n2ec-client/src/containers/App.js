import React, { Component } from 'react'
import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import Main from '../components/Main'
import './App.css'

export default class App extends Component {
    
    state = { isTop: true }
    
    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 20
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        })
    }

    render() {
        let className = !this.state.isTop ? 'scrolling' : null

        return (
            <div id='container'>
                <div id='topBar' className={className}>
                    <TopBar />
                </div>
        
                <div id='main'>
                    <Main />
                </div>
        
                <div id='footer'>
                    <Footer />
                </div>
            </div>
        )
    }
}