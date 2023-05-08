import React, { useState, useEffect } from "react";

function Lottery() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const [start1, setStart1] = useState(0);
  const [start2, setStart2] = useState(0);

  const end1 = num1;
  const end2 = num2;

  const drawLottery = () => {


    setStart1(1);
    setStart2(1);
    const randomNum1 = Math.floor(Math.random() * 12);
    const randomNum2 = Math.floor(Math.random() * 500);
    setNum1(randomNum1);
    setNum2(randomNum2);
    porsentage1();
    porsentage2();
  };

  const porsentage1 = () => {
    if (start1 < end1) {
      setStart1((prevCount) => prevCount + 1);
    }
  };
  const porsentage2 = () => {
    if (start2 < end2) {
      setStart2((prevCount) => prevCount + 1);
    }
  };

useEffect(()=>{
    
    if(start1 > 0 && start1 <= num1){
        const timer = setTimeout(()=>{
            setStart1(prevCount => prevCount+1)
        }, 120)
        return () => clearTimeout(timer);
    }
}, [start1, num1])

useEffect(()=>{
    
    if(start2 > 0 && start2 <= num2){
        const timer = setTimeout(()=>{
            setStart2(prevCount => prevCount+1)
        }, 4)
        return () => clearTimeout(timer);
    }
}, [start2, num2])

  const reset = () => {
    setNum1(0);
    setNum2(0);
    setStart1(0);
    setStart2(0);
  };
  

  return (
    <div className="lottery-container" >
      <h2 className="lottery-title">Velkommen til loddboklotteriet på Abildsø</h2>
      <h3 className="lottery-subtitle">17. mai 2023</h3>

      <div className="lottery-boxcontainer">
        <div className="lottery-textcontainer">
      <p className="lottery-text">
        Loddbok nummer:</p>
        </div>
        <p
        className="lottery-number"
        onChange={porsentage1}
        >
        
            {start1}
      </p>
      </div>

      <div className="lottery-boxcontainer">
        <div className="lottery-textcontainer">
      <p className="lottery-text">
        Lodd nummer: </p>
        </div>

        <p
        className="lottery-number"
        onChange={porsentage2}
        >
            {start2}
      </p>
      </div>


      <button className="lottery-button--left" onClick={drawLottery}>Trekk et lodd</button>
      <button className="lottery-button--right" onClick={reset}>Resett</button>
    </div>
  );
}

export default Lottery;
