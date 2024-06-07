import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    const data = useLoaderData()
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>
            GitHub Followers : {data.followers}
            <img width={300} src={data.avatar_url} alt="Git Pic" />
        </div>
    )
}

export default Github

export async function gitHubInfoLoader() {
    const response = await fetch('https://api.github.com/users/ganeshdarewar')
    return response.json()
}

