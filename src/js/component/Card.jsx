import React from "react";

const Card = (props) => {
    return (
       <div className="bg-secondary text-white fs-1 mx-3 my-5" style={{width: '15rem', height: '20rem'}}>{props.digit}</div>
    );
}

export default Card