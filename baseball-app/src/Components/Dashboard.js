import React from 'react';

export default function Dashboard(props) {
    const { ballCount, setBallCount, strikeCount, setStrikeCount } = props;
    const handleStrikeCount = () => {
        if( ballCount === 4 || strikeCount === 3) {
            setBallCount(0)
            setStrikeCount(0)
        } else {
            setStrikeCount(strikeCount + 1)
        }
        
    }
    const handleBallCount = () => {
        if( ballCount === 4 || strikeCount === 3) {
            setBallCount(0)
            setStrikeCount(0)
        } else {
            setBallCount(ballCount + 1)
        }
    }
    const handleFoul = () => {
        if( strikeCount < 2 ) {
            setStrikeCount(strikeCount + 1)
        }
    }
    const handleHit = () => {
        setBallCount(0)
        setStrikeCount(0)
    }
    return(
        <div>
            
            <button onClick={handleStrikeCount}>Strike</button>
            <button data-testid='ballButton' onClick={handleBallCount}>Ball</button>
            <button onClick={handleFoul}>Foul</button>
            <button onClick={handleHit}>hit</button>
        </div>
    )
}