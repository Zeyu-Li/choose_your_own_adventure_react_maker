import React, { Component } from 'react';
// generates image or colored background

export const Background = ({image, background_color, fadeIn, fadeOut}) => {
    // if fade in/out, fade in/out in 1 second, else 0 seconds
    let fade1 = fadeIn ? "1s": "0s"
    let fade2 = fadeOut ? "1s": "0s"

    // background is centered and should cover the whole screen
    return (
        <div className="background" style={{animation: "fadeout", fade2, backgroundColor: background_color}}>
            <img alt="display image" src={image ? image: ""} style={{animation: "fadein", fade1}}></img>
        </div>
    )
}
