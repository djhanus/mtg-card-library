import React from 'react';

const CardDisplay = ({ card }) => {
  return (
    <div className="card-item">
      <h3>{card.name}</h3>
      
      {card.image_uris && (
        <img 
          src={card.image_uris.normal} 
          alt={card.name}
          onError={(e) => {
            e.target.src = card.image_uris.small;
          }}
        />
      )}
      
      <div className="card-details">
        <p><strong>Mana Cost:</strong> {card.mana_cost || 'N/A'}</p>
        <p><strong>Type:</strong> {card.type_line}</p>
        <p><strong>Set:</strong> {card.set_name} ({card.set})</p>
        <p><strong>Rarity:</strong> {card.rarity}</p>
        
        {card.oracle_text && (
          <p><strong>Text:</strong> {card.oracle_text}</p>
        )}
        
        {card.power && card.toughness && (
          <p><strong>Power/Toughness:</strong> {card.power}/{card.toughness}</p>
        )}
        
        {card.prices && card.prices.usd && (
          <p><strong>Price (USD):</strong> ${card.prices.usd}</p>
        )}
      </div>
    </div>
  );
};

export default CardDisplay;