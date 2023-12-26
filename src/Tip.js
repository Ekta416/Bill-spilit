import React, { useState } from 'react';
import './Tip.css';

function Tip(props) {
  const [total, setTotal] = useState('');
  const [per, setPer] = useState('');

  const handleTip = (percentage) => {
    if (total.trim() !== '' && !isNaN(total)) {
      const tipAmount = (parseFloat(total) * percentage) / 100;
      const totalWithTip = parseFloat(total) + tipAmount;
      setPer(totalWithTip.toFixed(2));
    } else {
      setPer('Invalid input. Please enter a valid total.');
    }
  };

  return (
    <div>
      <div className='main'>
        <h3>Total Bill  <br></br>
          {props.v}
        </h3>
        <div>
          <label htmlFor="Bill">Bill </label>
          <input
            type="text"
            placeholder='$'
            onChange={(e) => {
              setTotal(e.target.value);
            }}
          ></input>
          <h2>{per} Rs</h2>
        </div>
        <br></br>
        <button type="submit" onClick={() => handleTip(5)}>
          5%
        </button>
        <button type="submit" onClick={() => handleTip(10)}>
          10%
        </button>
        <button type="submit" onClick={() => handleTip(10)}>
          15%
        </button>
        <button type="submit" onClick={() => handleTip(10)}>
          20%
        </button>
        <button type="submit" onClick={() => handleTip(0)}>
          custom
        </button>
        <br></br>
      </div>
    </div>
  );
}

export default Tip;
