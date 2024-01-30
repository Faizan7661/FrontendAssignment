import "./App.css";
import { useState } from "react";
import CardLists from "./Components/CardLists";
import UserInputBox from "./Components/UserInputBox";

function App() {
  const [cards, setCards] = useState([]);

  const handleUpdate = (id, updatedData) => {

    setCards((prevCards) =>
       prevCards.map((card) =>
         card.id === id ? { ...card, ...updatedData } : card
       )
    );
   };
   

  const handleAddUser = (user) => {
    setCards((prevCards) => [...prevCards, user]);
  };

  const handleDragStart = (e, data) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(data));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetData) => {
    e.preventDefault();
    const sourceData = JSON.parse(e.dataTransfer.getData("text/plain"));

    if (sourceData.id !== targetData.id) {
      const updatedCards = cards.map((card) => {
        if (card.id === sourceData.id) {
          return { ...card, age: targetData.age };
        }
        return card;
      });

      setCards(updatedCards);
    }
  };

  const handleDelete = (id) => {

    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };
  

  
  const ageGroups = {
    group1: cards.filter((card) => card.age >= 1 && card.age <= 18),
    group2: cards.filter((card) => card.age >= 19 && card.age <= 25),
    group3: cards.filter((card) => card.age >= 26 && card.age <= 45),
    group4: cards.filter((card) => card.age > 45),
  };

  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="table">
          <div
            className="table-column"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, { age: 18 })}
          >
            <CardLists
              title="Age (1-18)"
              cards={ageGroups.group1}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, { age: 18 })}
              onDelete={handleDelete}
              onUpdate ={handleUpdate}
            />
          </div>
          <div
            className="table-column"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, { age: 25 })}
          >
            <CardLists
              title="Age (19-25)"
              cards={ageGroups.group2}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, { age: 25 })}
              onDelete={handleDelete}
              onUpdate ={handleUpdate}
            />
          </div>
          <div
            className="table-column"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, { age: 45 })}
          >
            <CardLists
              title="Age (26-45)"
              cards={ageGroups.group3}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, { age: 45 })}
              onDelete={handleDelete}
              onUpdate ={handleUpdate}
            />
          </div>
          <div
            className="table-column"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, { age: 100 })}
          >
            <CardLists
              title="Age (45+)"
              cards={ageGroups.group4}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, { age: 100 })}
              onDelete={handleDelete}
              onUpdate ={handleUpdate}
            />
          </div>
        </div>
        <UserInputBox onAddUser={handleAddUser} />
      </div>
    </>
  );
}

export default App;