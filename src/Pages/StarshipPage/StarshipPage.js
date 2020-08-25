import React from 'react';
import { Link } from 'react-router-dom';

const StarshipPage = (props) => {
    return (
        <div className="star">
            <h3>Name:{props.location.state.name}</h3>
            <h3>Model:{props.location.state.model}</h3>
            <Link to={'/'}><h3>Return</h3></Link>
        </div>
    )
}

export default StarshipPage