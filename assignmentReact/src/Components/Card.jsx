import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function Card({ data, onDragStart, onDragOver, onDrop, onDelete , onUpdate}) {
  const [isEditing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState({ ...data });


  useEffect(() => {
    setEditedData({ ...data });
  }, [data]);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditedData({ ...data });
    setEditing(false);
  };

  const handleDeleteClick = () => {
    onDelete(data.id);
  };

  const handleChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  // Callback to handle the update when saving
  const onSave = (updatedData) => {
    // Pass the updated data and the id to a callback (e.g., onUpdate) to handle the update
    onUpdate(data.id, updatedData);
   };
   
   const handleSaveClick = () => {
    setEditing(false);
    onSave(editedData);
   };
    return (
        <div
        className="p-4 m-2 bg-white rounded-md cursor-move relative"
        draggable
        onDragStart={(e) => onDragStart(e, data)}
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, data)}
        >
        {isEditing ? (
            <>
            <div className="flex justify-end mb-2">
                <button
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                onClick={handleSaveClick}
                >
                Save
                </button>
                <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={handleCancelClick}
                >
                Cancel
                </button>
            </div>
            <input
                type="text"
                name="name"
                value={editedData.name}
                onChange={handleChange}
                className="mb-2"
            />
            <input
                type="email"
                name="email"
                value={editedData.email}
                onChange={handleChange}
                className="mb-2"
            />
            <input
                type="tel"
                name="phone"
                value={editedData.phone}
                onChange={handleChange}
                className="mb-2"
            />
            <input
                type="number"
                name="age"
                value={editedData.age}
                onChange={handleChange}
                className="mb-2"
            />
            </>
        ) : (
            <>
            <strong>{data.name}</strong>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Phone:</strong> {data.phone}</p>
            <p><strong>Age: </strong>{data.age}</p>
            <div className="absolute top-0 right-0 m-2">
                <FontAwesomeIcon
                icon={faEdit}
                className="text-blue-500 cursor-pointer"
                onClick={handleEditClick}
                />
                <FontAwesomeIcon
                icon={faTrash}
                className="text-red-500 cursor-pointer ml-2"
                onClick={handleDeleteClick}
                />
            </div>
            </>
        )}
        </div>
    );
    }

    export default Card;
