import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data, setdata] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/imSarthakGautam')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setdata(data)
        })
        
    }, [])
    return (
        <>
            <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Followers: {data.followers}</div>
            <img src={data.avatar_url} alt="github picture" width={300}></img>
        </>
    )
}

export default Github
