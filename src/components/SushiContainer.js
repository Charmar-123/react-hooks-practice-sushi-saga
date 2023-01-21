import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushi, handleEatenClick, canEat, wallet}) {
  const [count, setCount] = useState(0)


  const sushiList = sushi.slice(count, count + 4).map(({ id, name, img_url, price }) => <Sushi
    key={id}
    name={name}
    img_url={img_url}
    price={price}
    handleEatenClick={handleEatenClick}
    wallet={wallet}

  />)


  const handleMoreButton = () => {
    setCount(count + 4)
  }

  return (
    <div className="belt">
      {sushiList}
      <MoreButton handleMoreButton={handleMoreButton} />
    </div>
  );
}

export default SushiContainer;
