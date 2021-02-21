import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Media} from 'react-bootstrap';
import ImgProfile from './ImgProfile';
import PropTypes from "prop-types";
const Profile = (props) => {
    return(
      <Container>
        <Media>
        <ImgProfile Photo={props.DataProfile}/>
        <Media.Body>
            <h2>{props.DataProfile.Name}</h2>
            <h4>{props.DataProfile.Profession}</h4>
            <p>
                {props.DataProfile.Bio}
           </p>
        </Media.Body>
        </Media>
      </Container>
    );
   }
   Profile.propTypes={
    Name: PropTypes.string,
    Profession: PropTypes.string,
    Bio: PropTypes.string,
    };
   export default Profile;