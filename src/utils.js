import React from 'react';

export let randomRange = (min, max) => {
    return(
        Math.floor(Math.random() * (max - min + 1)) + min
    )
}