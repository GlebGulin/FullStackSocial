import React from 'react';
import st from './Gallery.module.css';
import GalleryItems from './GalleryItems/GalleryItems';
import MyCustomContext from './../../../BLL/CustomContext/MyCustomContext';

const Gallery = () => {

    // let imagesItems = props.myGalleryImages.map(el =>
    //     (<GalleryItems key={el.id} id={el.id} url={el.url} />))

    debugger;
    return(
        <MyCustomContext.Consumer>{
            (store) => {
                let state = store.getState().galleryPage;
                debugger;
                let imagesItems = state.myGalleryImages.map(el =>
                    (<GalleryItems key={el.id} id={el.id} url={el.url} />))
                return(
                    <div>
                        {imagesItems}
                    </div>)
            }
            
        }
            
        </MyCustomContext.Consumer>
        
    )
} 

export default Gallery;