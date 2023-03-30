import React from 'react';
import st from './Gallery.module.css';
import GalleryItems from './GalleryItems/GalleryItems';

const Gallery = () => {
    let imagesArray = [
        {
            id: "1",
            url : `https://bossautoukraine.com.ua/assets/car_cheaper_than.png`
        },
        {
            id: "2",
            url : `https://focus.ua/static/storage/thumbs/920x465/e/8a/d6ea711e-c6ab471101868870461d0628925cb8ae.jpg?v=6495_1`
        }
    ];

    let imagesItems = imagesArray.map(el =>
        (<GalleryItems key={el.id} id={el.id} url={el.url} />))

    debugger;
    return(
        <div>
            {imagesItems}
        </div>
    )
} 

export default Gallery;