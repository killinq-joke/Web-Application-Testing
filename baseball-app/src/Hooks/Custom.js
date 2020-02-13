import React, { useState } from 'react';

export const useBallCount = evt => {
    const [ballCount, setBallCount] = useState(0);
  const incrementBall = e => {
    if( ballCount === 4 || strikeCount === 3) {
        setBallCount(0)
        setStrikeCount(0)
    } else {
        setBallCount(ballCount + 1)
    }
  };
  return [ballCount, incrementBall];
}