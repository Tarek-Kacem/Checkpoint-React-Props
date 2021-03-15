import PropTypes from "prop-types";
const Profile = (props) => {
    return (
        <div>
            <h1>{props.fullname}</h1>
            <h1>{props.bio}</h1>
            <h1>{props.profession}</h1>
            <div style={{border: "solid black"}}>{props.children}</div>
            <h1>{props.age}</h1>
            <button onClick = {props.greeting}>Hello</button>
        </div>
    )
}
Profile.defaultProps={age:27}
Profile.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    age: PropTypes.number,
    greeting: PropTypes.func
   };

export default Profile
