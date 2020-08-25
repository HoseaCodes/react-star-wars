import React from 'react';
import { Link } from 'react-router-dom';

const StarshipHome = (props) => {
    return (
        <div>
            {props.starShipData.map((starship, idx) =>
                <Link to={{ pathname: `/starships/${idx}`, state: starship }} >
                    <p id='btn' className='btn btn-default'>{starship.name}</p>
                </Link>
            )
            }
        </div>
    )
}

export default StarshipHome