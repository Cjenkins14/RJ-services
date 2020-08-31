import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import './Services.css'

class Services extends Component {
    render() {
        return (
            <div className='services-page'>
                <header>
                    <div className='left'>
                        <img className='logo-img' src='https://user-images.githubusercontent.com/54726437/91755430-b3a56380-eb90-11ea-9865-05b7bdf1b59e.png' />  
                    </div>
                </header>

                <NavBar/>
                <h1>Services</h1>
                <div className='services-list'>
                    <label htmlFor='plumb-list'>Plumbing</label>
                    <ul id='plumb-list'>
                        <li>Repairs</li>
                        <li>Slab Leaks and Repairs</li>
                        <li>Leaking Pipes</li>
                        <li>Drain Clean Outs</li>
                        <li>Sewer Clean Outs</li>
                        <li>Jet Wash Drains</li>
                        <li>Gas Line Relocation</li>
                        <li>Gas Leaks</li>
                        <li>New Construction</li>
                    </ul>

                    <label htmlFor='carp-list'>Carpentry</label>
                    <ul id='carp-list'>
                        <li>Restoration</li>
                        <li>Remodeling</li>
                        <li>Custom Carpentry</li>
                        <li>New Construction</li>
                        <li>Painting</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Services;