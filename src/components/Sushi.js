import {useState} from "react";

function Sushi({id, name, img_url, price, handleEatenClick, wallet}) {

  const [emptyPlate, setEmptyPlate] = useState(false)

  const [isEaten, setIsEaten] = useState(false)

  const onEatenClick = () =>{

    if(wallet >= price){  
      handleEatenClick(name, price);
      setIsEaten(true);
      setEmptyPlate(true);} 
      else {
        console.log("Done Eating");
      }


}



  return (
    <div className="sushi">
      <div className="plate" onClick={emptyPlate ?  null : onEatenClick}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={img_url}
            alt={ `${name}Sushi`}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
