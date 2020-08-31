import React, {Link, Component} from 'react';
import NavBar from '../NavBar/NavBar';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div class='home-page'>
                <header>
                    <div className='left'>
                        <img className='logo-img' src='https://user-images.githubusercontent.com/54726437/91755430-b3a56380-eb90-11ea-9865-05b7bdf1b59e.png' />  
                    </div>
                </header>

                <NavBar/>

                <section>
                    <p>940-555-1234 <br/>
                    24/7 Emergency repair sevice</p>
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