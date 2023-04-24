//Start initialize profileState after including Redux
let initialState = {
    myGalleryImages : [
        {
            id: "1",
            url : `https://daveywankenobie.files.wordpress.com/2016/09/img_8603.jpg?w=676`
        },
        {
            id: "2",
            url : `https://countrysidemobility.org/sites/default/files/styles/colorbox/public/locations/IMG_7239%20Resize.JPG?itok=3Z4mcOl6`
        }
    ]
}

const GalleryReducer = (state = initialState, action) => {
    return state;
}

export default GalleryReducer;