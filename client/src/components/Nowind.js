import React from 'react';

const nowWind = {
    position: 'absolute',
    width: 200+"px",
    height: 100+"px",
    background: 'red',
    top: 50+'%',
    left: 50+'%',
    zIndex: 10000
}

export default ({text}) => (
    <h1 style={nowWind}>{text}</h1>
);
