import React from "react";

export default function Display(props) {
 
    const { ballCount, strikeCount } = props;
  
  return (
    <div>
      
      <h3>Balls: {ballCount}</h3>
      <h3>Strikes: {strikeCount}</h3>
    </div>
  );
}
