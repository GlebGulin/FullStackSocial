const ProfilePart = (props) => {
    console.log("Profile info in profile part");
    console.log(props.state);
    return(
        <div>
            <div>
                <img src={props.state.preview} width='100px'/>
            </div>
            <div>
                <p>{props.state.firstName} {props.state.lastName}</p>
            </div>
            <div>
                <p>"{props.state.userStatus}"</p>
            </div>
            <div>
                <p>{props.state.age}</p>
            </div>
            <div>
                <p>Country: {props.state.country}</p>
            </div>
            <div>
                <p>City: {props.state.city}</p>
            </div>
        </div>
    );
}

export default ProfilePart;