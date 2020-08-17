import React, {Component} from 'react';
import Gallery from 'react-photo-gallery';
import './Gallery.css';
import NavBar from '../NavBar/NavBar';
import photos from './photos'

class PhotoGallery extends Component {
    render() {
        return (
            <div className='Gallery'>
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
                    <Gallery photos={photos} />
                </section>
            </div>
        )
    }
}

export default PhotoGallery;