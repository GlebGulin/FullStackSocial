import GalleryItems from "./GalleryItems/GalleryItems";

const Gallery = (props) => {
    debugger;
    let imagesItems = props.galleryPage.myGalleryImages.map(el =>
        (<GalleryItems key={el.id} id={el.id} url={el.url} />));
        return(
            <div>
                {imagesItems}
            </div>
        )
}

export default Gallery;