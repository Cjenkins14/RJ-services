import React, {Component} from 'react';
import './Contact.css';
import NavBar from '../NavBar/NavBar';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          phone: '',
          message: ''
        }
      }

      onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
      onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }

      onPhoneChange(event) {
          this.setState({phone: event.target.value})
          console.log(this.state.phone)
      }

      resetForm(){
    
        this.setState({name: '', email: '', phone: '', message: ''})
     }
      
      handleSubmit(e) {
        e.preventDefault();
    
        fetch('https://rj-service-api.herokuapp.com/send',{
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          }).then(
            (response) => (response.json())
           ).then((response)=>{
          if (response.status === 'success'){
            alert("Message Sent."); 
            this.resetForm()
          }else if(response.status === 'fail'){
            alert("Message failed to send.")
          }
        })
      }

    render() {
        
        return (
            <div className='contact'>
                <header>
                    <div className='left'>
                        <img 
                        className='logo-img' 
                        src='https://user-images.githubusercontent.com/54726437/91755430-b3a56380-eb90-11ea-9865-05b7bdf1b59e.png' 
                        alt='RJ services logos'
                        />  
                    </div>
                </header>

                <NavBar/>
                <section>
                  <p>You may contact us via the emergency number listed on the home page or send an email here,
                    we will respond to all requests as soon as possible.
                  </p>
                    <form id='contact-form' className='appt-form' onSubmit={this.handleSubmit.bind(this)} method='POST'>
                        <fieldset>
                            <legend>Make an Appointment</legend>
                            <ul className='input-list'>
                                <li>
                                    <label htmlFor='full-name'>
                                        Full Name:
                                        </label>
                                    <input 
                                    type='text' 
                                    id='client-name' 
                                    value={this.state.name} 
                                    onChange={this.onNameChange.bind(this)}
                                    required autoFocus />
                                </li>
                                <li>
                                    <label htmlFor='client-email'>Email:</label>
                                    <input 
                                    type='email' 
                                    id='client-email' 
                                    value={this.state.email} 
                                    onChange={this.onEmailChange.bind(this)}
                                    required />
                                </li>
                                <li>
                                    <label htmlFor='client-tel'>Phone Number:</label>
                                    <input 
                                    type='number' 
                                    id='client-tel'
                                    value={this.state.phone}
                                    onChange={this.onPhoneChange.bind(this)}
                                    required />
                                </li>
                                <li>
                                    <label htmlFor='comments'>How can we help?</label>
                                    <textarea 
                                    type='textarea' 
                                    id='comments'
                                    value={this.state.message} 
                                    onChange={this.onMessageChange.bind(this)} 
                                    required />
                                </li>
                            </ul>
                        </fieldset>
                        <div className='buttons'>
                            <button className='submit-button' type='submit'>Submit</button>
                            <button className='reset-button' type='reset'>Clear</button>
                        </div>
                    </form>
                </section>
            </div>
        )
    }
}

export default Contact;