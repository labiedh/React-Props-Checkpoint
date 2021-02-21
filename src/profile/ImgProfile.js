import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";
const ImgProfile=(props)=>{
    return(
<img
    style={{width:"160px",height:"160px",borderRadius:"80px",backgroundSize:"cover"}}
    src={props.Photo.ImgProf}
    alt="MonPhoto"
  />    );
}
ImgProfile.propTypes={
ImgProf: PropTypes.string
};
export default ImgProfile;
