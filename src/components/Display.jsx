import React from 'react';
import './Display.css';

const display = (props) => { 
    return (
        <React.Fragment>
            <div className='btns-group'>
                <div className='btn-close'></div>
                <div className='btn-minimize'></div>
                <div className='btn-maximize'></div>
            </div>
            <div className='display'>{ props.value }</div>
        </React.Fragment>
    );
};

export default display;
