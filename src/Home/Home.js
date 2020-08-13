import React, {Link, Component} from 'react';
import NavBar from '../NavBar/NavBar';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div class='home-page'>
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
                    <p>
                        RJ services is a family owned and operated handyman business. With a combined
                        10+ years of experience in carpentry and plumbing our team is 
                        here to meet all of your remodeling, plumbing, and other home repair needs.
                    </p>
                </section>
            </div>
        )
    }
};

export default Home;