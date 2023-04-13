const ProfilePart = (props) => {
    return(
        <div>
            <div>
                <img src={props.state.preview} width='100px'/>
            </div>
            <div>
                <p>{props.state.firstName} {props.state.lastName}</p>
            </div>
            <div>
                <p>{props.state.age}</p>
            </div>
        </div>
    );
}

export default ProfilePart;