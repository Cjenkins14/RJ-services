import React, {Link, Component} from 'react';
import NavBar from '../NavBar/NavBar';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div class='home-page'>
                <header>
                    <div className='left'>
                        <img 
                        className='logo-img' 
                        src='https://user-images.githubusercontent.com/54726437/91757054-61b20d00-eb93-11ea-8dbe-0b70ffb3113f.png' 
                        alt='RJ services logos'
                        />  
                    </div>
                </header>

                <NavBar/>

                <section>
                    <h1>24/7 Emergency Repair Service</h1>
                    <ul class='about-blurb'>
                        <li>
                            Family <br/>
                            owned
                        </li>
                        <li>
                            Licensed
                        </li>
                        <li>
                            10yrs <br/>
                            experience
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
};

export default Home;