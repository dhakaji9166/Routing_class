import React from 'react'

import { useParams, useNavigate } from 'react-router-dom'

function UserDetail() {
    const { name } = useParams();
    const navigate = useNavigate()



    const GoBackHandler = () => {
        navigate("/user")
        // navigate(-1)
    }


    return (
        <div className='flex flex-col w-1/2 m-auto mt-40 '>
            <h1 className='mt-4 text-4xl text-red-500 font-semibold'>User Details</h1>
            <h1 className='mt-4 text-4xl text-gray-800 font-semibold mb-4'>Hello {name}</h1>

            <button onClick={GoBackHandler} className='px-3 py-2 text-white bg-red-600 mt-3 w-1/4 rounded-full tracking-normal'>Go Back</button>
        </div>
    )

}


export default UserDetail