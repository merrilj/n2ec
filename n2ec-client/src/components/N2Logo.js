import React from 'react'
import Img from 'react-image'

const N2Logo = ({ className }) => (
    <Img src={require('../images/n2ec-logo.png')} className={`logo ${className}`} alt='N2 logo' />
)

export default N2Logo