import React from 'react';

function ControlDisplay(props){
    const {isPlaying, setIsPlaying} = props;

    const clickPlay = () => {
        isPlaying ? setIsPlaying(false) : setIsPlaying(true);
        isPlaying ? console.log('Stopping sim') : console.log('Starting sim');
    }

    const handleClick = (event) => {
        event.preventDefault();
        clickPlay();
    }

    return(
        <div>
            <button 
                onClick={handleClick}
                className={isPlaying ? 'ui-button stop' : 'ui-button start'}
            >{isPlaying ? 'Stop' : 'Start'}</button>
        </div>
    )
}

export default ControlDisplay;