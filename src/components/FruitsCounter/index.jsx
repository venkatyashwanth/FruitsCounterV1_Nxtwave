import React, { useState } from 'react';
import style from "./FruitsCounter.module.scss";

function FruitsCounter() {
  const [countItems,setCountItems] = useState({itemOne: 0, itemTwo: 0})
  const handleFirstBag = () => {
    setCountItems({...countItems,itemOne: countItems.itemOne + 1})
  }
  const handleSecondBag = () => {
    setCountItems({...countItems,itemTwo: countItems.itemTwo + 1})
  }

  return (
    <>
      <div className={style.appBg}>
        <div className={style.appContent}>
          <h1>Bob ate <span>{countItems.itemOne}</span> mangoes <span>{countItems.itemTwo}</span> bananas</h1>
          <div className={style.FruitsBag}>
            <div className={style.bagCont}>
              <img src="https://assets.ccbp.in/frontend/react-js/mango-img.png" alt="mango" />
              <button type='button' className={style.btnElement} onClick={handleFirstBag}>Eat Mango</button>
            </div>
            <div className={style.bagCont}>
              <img src="https://assets.ccbp.in/frontend/react-js/banana-img.png" alt="banana" />
              <button type='button' className={style.btnElement} onClick={handleSecondBag}>Eat Banana</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FruitsCounter