import React from "react";
import GalleryItems from "./GalleryItems/GalleryItems";

// const Gallery = (props) => {
//     debugger;
//     let imagesItems = props.galleryPage.myGalleryImages.map(el =>
//         (<GalleryItems key={el.id} id={el.id} url={el.url} />));
//         return(
//             <div>
//                 {imagesItems}
//             </div>
//         )
// }

class Gallery extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div>
            {
                this.props.galleryPage.myGalleryImages.map(el =>
                            (<GalleryItems key={el.id} id={el.id} url={el.url} />))
            }
        </div>)
    }
}

export default Gallery;