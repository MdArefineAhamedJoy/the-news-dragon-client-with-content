import React from 'react';
import { Link } from 'react-router-dom';

const Tums = () => {
    return (
        <div>
            <h2>Our Terms and Condition </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veritatis labore aut tenetur. Placeat suscipit inventore a dolorem vel molestias tempore autem debitis ratione, porro officia, ab, cum eaque quos?</p>
            <p>Go Back to <Link to='/register'>Register</Link> </p>
        </div>
    );
};

export default Tums;