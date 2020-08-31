import React, {Link, Component} from 'react';
import NavBar from '../NavBar/NavBar';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div class='home-page'>
                <header>
                    <div className='left'>RJ Services</div>
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
                            Experienced
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
};

export default Home;