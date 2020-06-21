import React, { Component } from 'react';

export const Background = ({image, background_color, fadeIn, fadeOut}) => {
    // fade in?
    let fade = fadeIn ? "1s": "0s"
    return (
        <div className="background" style={{backgroundColor: background_color}}>
            <img alt="display image" src={image} style={{animation: "fadein", fade}}></img>
        </div>
    )
}
