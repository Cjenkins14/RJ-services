import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';


class Services extends Component {
    render() {
        return (
            <div className='services-page'>
                <header>
                    <div className='left'>RJ Services</div>
                    <div className='right'>
                        <p>24/7 Emergency <br/> 
                        handyman services
                        </p>
                    
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

                    </ul>

                    <label htmlFor='carp-list'>Carpentry</label>
                    <ul id='carp-list'>
                        <li>Restoration</li>
                        <li>Remodeling</li>
                        <li>Custom Carpentry</li>
                        <li>New Construction</li>
                        <li>Outdoor Construction</li>
                    </ul>

                    <label htmlFor='gen-list'>Additional Services</label>
                    <ul id='gen-list'>
                        <li>Additional</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Services;