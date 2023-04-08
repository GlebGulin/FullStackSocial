//Start initialize profileState after including Redux
let initialState = {
    myGalleryImages : [
        {
            id: "1",
            url : `https://bossautoukraine.com.ua/assets/car_cheaper_than.png`
        },
        {
            id: "2",
            url : `https://focus.ua/static/storage/thumbs/920x465/e/8a/d6ea711e-c6ab471101868870461d0628925cb8ae.jpg?v=6495_1`
        }
    ]
}

const GalleryReducer = (state = initialState, action) => {
    return state;
}

export default GalleryReducer;