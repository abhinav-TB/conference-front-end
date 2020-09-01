import React from 'react'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Intro from '../components/commities intro/intro'
import List from '../components/commitie list/list'

export default function commities() {
    return (
        <div>
            <Navbar/>
            <Intro/>
            <List/>
            <Footer/>
            
        </div>
    )
}
