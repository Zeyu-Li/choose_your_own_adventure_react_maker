import React from 'react';
// generates text where ever (top/bottom/center)

export const Text = ({text}) => {
    if (text != null) {
        return (
            <div className="typing_text">
                <p>{text}</p>
            </div>
        )
    } else {
        return null
    }
}
