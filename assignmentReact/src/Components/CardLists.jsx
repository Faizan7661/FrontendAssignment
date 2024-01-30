// In CardLists.jsx
import React from 'react';
import Card from './Card';

function CardLists({ title, cards, onDragStart, onDragOver, onDrop, onDelete, onUpdate }) {
  return (
    <>
      <div className="mt-8">
        <h2 className="text-lg font-bold">{title}</h2>
        <div className="flex flex-col">
          {cards.map((card) => (
            <Card
              key={card.id}
              data={card}
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDrop}
              onDelete={onDelete} // Pass onDelete prop
              onUpdate={onUpdate}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CardLists;
