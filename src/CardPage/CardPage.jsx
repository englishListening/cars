import React from 'react';
import { useParams } from 'react-router-dom';
import Card from './CardD';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Loading from '../Animations/Loading';
const CardPage = ({handleClick}) => {
  const { id } = useParams();
  console.log(id)
  const [cards , setCards] = useState([])

  useEffect(() => {
        axios.get(`https://guileless-licorice-6ebd82.netlify.app/`)
        .then(car => setCards(car.data))
        .catch(err =>console.log(err))
  })
  // Assuming you have an array of card data
  // const cards = [
  //   { id:1, name: 'Card 1', type: 'This is card 1' },
  //   { id: 2, name: 'Card 2', type: 'This is card 2' },
  //   { id: 3, name: 'Card 3', type: 'This is card 3' },
  // ];

  const card = cards.find(card => card.id === parseInt(id));

  return (
    <div>
      <div className="CardPage">
      {card ? (
        <Card item={card} hands={handleClick}/>
      ) : (
        <Loading/>
      )}
    </div>

    </div>
  );
};

export default CardPage;