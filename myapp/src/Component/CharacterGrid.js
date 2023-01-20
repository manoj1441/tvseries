import React from "react";
import CharacterItems from './CharacterItems'

const CharacterGrid = ({ items,isLoading }) => {
   return isLoading ? (<h1>Loading ....</h1>) : (
      <section className="cards">{items.map(item=>(
        <CharacterItems key={item.char_id} item={item} />
      ))} </section>
    )
   
    
       }
 
 export default CharacterGrid