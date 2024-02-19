import React, { useEffect, useState } from 'react'

function List() {
    const [user, setuser] = useState([])
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/users');
            if (!response.ok) {
                throw new Error("Error fetching data");
            }
            const data = await response.json();
            setuser(data);
            // console.log(user);
        } catch (error) {
            console.error('Error fetching data:', error);
            window.alert("No users found ");
        }
    }
    
    useEffect(() => {
        fetchData();
        const intervalId = setInterval(() => {
            fetchData(); // Fetch data every 10 seconds
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetchData();
    }

    return (
        <>
            <div className="flex text-center justify-center m-4">

                <button
                    onClick={handleSubmit}
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                >
                    List all users
                </button>
                </div>
                {
                    user?
                
               ( <div className="max-w-md mx-auto bg-white rounded p-8 shadow-md">
                    <ul>
                        {
                            user.map((user, index) => (
                                <li key={index} className='mb-2' >
                                    <div className="font-bold">{user.name}</div>
                                    <div className="text-gray-600">{user.email}</div>
                                </li>
                            ))
                        }
                    </ul>

                </div>):
                (
                    <h1>user not found</h1>
                )
                }
        </>
    )
}

export default List