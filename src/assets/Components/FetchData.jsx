import { useState, useEffect } from "react";
import axios from "axios";

const FetchData=()=>{
    const[data,setData]= useState([])
    const url = "https://api.chucknorris.io/jokes/random";
    const fetchJokes= async ()=>{
        try{
            const response = await axios.get(url)
            setData(response.data.value)
        }
        catch(e){
            console.log(`Error fetching jokes: ${e}`)
        }

    }
    useEffect(()=>{
        fetchJokes()
    },[])
    return(
        <>
        <div>
            <h3>Random Chuck Norris Jokes</h3>
            <h4>{data}</h4>
            <button onClick={fetchJokes} className="border border-black bg-[#6027FF]">Get Another Joke</button>
        </div>
        </>
    )
}
export default FetchData;