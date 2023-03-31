import React from 'react';
import st from './Gallery.module.css';
import GalleryItems from './GalleryItems/GalleryItems';

const Gallery = (props) => {

    let imagesItems = props.myGalleryImages.map(el =>
        (<GalleryItems key={el.id} id={el.id} url={el.url} />))

    debugger;
    return(
        <div>
            {imagesItems}
        </div>
    )
} 

export default Gallery;