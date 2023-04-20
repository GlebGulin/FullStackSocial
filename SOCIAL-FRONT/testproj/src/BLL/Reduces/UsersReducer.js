//Start initialize profileState after including Redux
let initialState = {
}

const UsersReducer = (state = initialState, action) => {
    users : [
        {
            id : "456345325665464",
            country : "Ukraine",
            city : "Kiev",
            name : "Tatiana Ugolkova",
            followed : true,
            avat : "https://i.ebayimg.com/images/g/rZoAAOSwbxxhwKJv/s-l500.jpg",
            status : "I am ready"
        },
        {
            id : "45645646554544654654654",
            country : "Deutchland",
            city : "Berlin",
            name : "Natasha Sex",
            followed : true,
            avat : "https://images.nubiles-porn.com/models/natasha_nice/natasha_nice640.jpg",
            status : "Call me"
        },
        {
            id : "45645646554544654654543534654",
            country : "USA",
            city : "New York",
            name : "Savannah Watson",
            followed : true,
            avat : "https://i.pinimg.com/1200x/a3/51/b7/a351b79ed09296e261458e037be28058.jpg",
            status : "Where are you"
        }
    ]
}

export default UsersReducer;