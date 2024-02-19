import React from 'react'
import { useState } from 'react';
function Update() {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [data, setData] = useState([]);
  
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await fetch('http://localhost:5000/update', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
          });
          if (!response.ok) {
              throw new Error('Failed to create record');
          }
          const responseData = await response.json();
         window.alert(responseData.msg);
          
          setFormData({ name: '', email: '' });
      } catch (error) {
          console.error('Error creating record:', error);
      }
  };
  
  return (
   <>
    <div className="max-w-md mx-auto bg-white rounded p-8 shadow-md ">
            <h2 className="text-2xl font-semibold mb-4">Update By email</h2>
            <form className="mb-4">
                
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input rounded-md shadow-sm w-full"
                        placeholder="Enter email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2"> New Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input rounded-md shadow-sm w-full"
                        placeholder="Enter  new name"
                        required
                    />
                </div>


                <button
                    onClick={handleSubmit}
                    type="submit"
                    className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
                >
                    Update
                </button>
            </form>
           
        </div>
   </>
  )
}

export default Update