import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
FraisList.propTypes = {
    fraisList: PropTypes.array,
};
FraisList.defaultProps = {
    fraisList: [],
}

function FraisList({fraisList}) {
    return (
        <div className='fraiss__items'>
            {fraisList.map(frais => (
                <ul>
                <li key={frais.id} className='fraiss__img'>
                    <img style={{width:'207px'}} src={frais.thumbnailUrl} alt="" />
                </li>
                </ul>
            ))}
        </div>
    );
}

export default FraisList;