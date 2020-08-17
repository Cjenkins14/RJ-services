import React, {Component} from 'react';
import './Contact.css';
import NavBar from '../NavBar/NavBar';

class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                 <header>
                    <div className='left'>RJ Services</div>
                    <div className='right'>
                        <p>24/7 Emergency <br/> 
                        handyman services
                        </p>
                    
                    </div>
                </header>

                <NavBar/>
                <section>
                    <form className='appt-form'>
                        <fieldset>
                            <legend>Make an Appointment</legend>
                            <ul className='input-list'>
                            <li>
                                    <label htmlFor='player-name'>
                                        Full Name:
                                        </label>
                                    <input type='text' id='client-name' required autoFocus />
                                </li>
                                <li>
                                    <label htmlFor='client-email'>Email:</label>
                                    <input type='email' id='client-email' required />
                                </li>
                                <li>
                                    <label htmlFor='grad-date'>Phone Number:</label>
                                    <input type='tel' id='client-tel' required />
                                </li>
                                <li>
                                    <label htmlFor='comments'>How can we help?</label>
                                    <textarea type='textarea' id='comments' required />
                                </li>
                            </ul>
                        </fieldset>
                        <section>
                            <button className='submit-button' type='add'>Submit</button>
                            <button className='reset-button' type='reset'>Clear</button>
                        </section>
                    </form>
                </section>
            </div>
        )
    }
}

export default Contact;