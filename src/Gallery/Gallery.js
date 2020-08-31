import React, {Component} from 'react';
import Gallery from 'react-photo-gallery';
import './Gallery.css';
import NavBar from '../NavBar/NavBar';
import photos from './photos';

class PhotoGallery extends Component {
    render() {
        return (
            <div className='Gallery'>
                 <header>
                    <div className='left'>
                        <img className='logo-img' src='https://user-images.githubusercontent.com/54726437/91755430-b3a56380-eb90-11ea-9865-05b7bdf1b59e.png' />  
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