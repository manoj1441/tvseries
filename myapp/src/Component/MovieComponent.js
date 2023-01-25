import React from "react"


const MovieComponent=(props)=>{
    const boxes=props.movie.map(
        (item,index)=>{
            return <Box key={index} image={item.poster_path} title={item.original_title} rating={item.vote_average}  />
        }
    )

    return(

        <div className="boxes" >
          {boxes}
        </div>
    )
}
const Box=(props)=>{
    const imgpath="https://image.tmdb.org/t/p/w1280"
    return(
        <div className="shadow">
            <img src={imgpath + props.image} className="imgpath"></img>
            <div className="shadow-1">
            <span>{props.title}</span>
            <span >{props.rating}</span>
            
            </div>

        </div>
    )
}
export default MovieComponent