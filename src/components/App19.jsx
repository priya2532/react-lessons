import React, { useState } from 'react';

const CricketScoreboard = () => {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);

  const increaseRuns = () => {
    if (wickets < 10) {
      setRuns(runs + 1);
    }
  };

  const increaseWickets = () => {
    if (wickets < 10) {
      setWickets(wickets + 1);
    }
  };

  const getMessage = () => {
    if (wickets === 10) {
      return 'Game Over!';
    } else if (runs >= 4 && wickets < 5) {
      return 'Well Done!';
    } else if (runs < 4 && wickets >= 5) {
      return 'Better Luck Next Time!';
    } else {
      return '';
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h2>App19</h2>
      <p><strong>Assignment</strong></p>
      <h3>Cricket Scoreboard</h3>

      <div style={{ display: 'inline-block', border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '10px' }}>
        <h1>Runs: {runs}</h1>
        <button onClick={increaseRuns}>Run</button>
        <h1>Wickets: {wickets}</h1>
        <button onClick={increaseWickets}>Wicket</button>
      </div>

      <div style={{ display: 'inline-block', border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '10px' }}>
        <h2>{getMessage()}</h2>
      </div>
    </div>
  );
};

export default CricketScoreboard;