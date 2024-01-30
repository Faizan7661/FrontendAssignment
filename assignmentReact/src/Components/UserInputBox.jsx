import React from 'react';
import { useState } from 'react';

function UserInputBox({ onAddUser }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
  
    const handleAddUser = () => {
      if (name && email && phone && age) {
        const newUser = {
          id: Date.now(),
          name,
          email,
          phone,
          age: parseInt(age),
        };
        onAddUser(newUser);
        setName('');
        setEmail('');
        setPhone('');
        setAge('');
      }
    };
  
    const handleCancel = () => {
      setName('');
      setEmail('');
      setPhone('');
      setAge('');
    };


  return (
    <>
     <div className="mt-8 p-4 border rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">User Input</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-2">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border rounded-md" />
        </div>
        <div className="mb-2">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded-md" />
        </div>
        <div className="mb-2">
          <label>Phone:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2 border rounded-md" />
        </div>
        <div className="mb-2">
          <label>Age:</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="w-full p-2 border rounded-md" />
        </div>
      </div>
      <div className="flex justify-between mt-4">
        
        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={handleCancel}>
          Cancel
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleAddUser}>
          Add
        </button>
      </div>
    </div>
    </>
  )
}

export default UserInputBox