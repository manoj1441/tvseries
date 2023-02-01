import react, { useEffect, useState } from "react";
import MovieComponent from "./Component/MovieComponent";
import axios from "axios";
import './App.css'
const api="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
const searchapi="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

const App=()=>{

const[movie,setMovie]=useState([])
const[search,setSearch]=useState("")
const change=(e)=>{
    setSearch(e.target.value)
}
const getAllMovie=()=>{
    axios.get(api).then(
        (response)=>{
            setMovie(response.data.results)
        }
    )
    .catch(
        (error)=>{
            console.log(error)
        }
    )
}
const getSearchMovie=()=>{
    axios.get(searchapi+search)
    .then(
        (response)=>{
            setMovie(response.data.results)
        }
    ).catch(
        (error)=>{
            console.log(error)
        }
    )
}
useEffect(
    ()=>{
        setMovie([]);
        if(search===""){
            getAllMovie()
        }else{
            getSearchMovie()
        }
      },[search]
)

return(
        <div className="page">
            <input type="search" className="search" placeholder="Srearch movie" value={search} onChange={change} />{
                movie.length===0
                ?
                <div>Loading...</div>
                :<MovieComponent movie={movie} />
            }
            
        </div>
    )
  
}
export default App