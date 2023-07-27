// import React from 'react';
import './cardsDisplay.scss';
import Card, { displayType } from '../card/Card';

interface Props {
  props: {
    mealsArr: displayType[];
  };
}

const CardsDisplay = (props:Props) => {
  const message = 'Search for recipe';
  const dataArr = props.props.mealsArr;


  return (
    <div className='cards-display-main_container'>
        { 
          !dataArr || dataArr.length === 0 ? <p>{message}</p> 
          :
          dataArr.map((item, index) => {
            return <Card key={index} recievedData={item}/>
          })
        }
    </div>
  )
}

export default CardsDisplay;