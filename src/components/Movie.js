import React from 'react'
import Genre from './Genre'

 
const Movie = (props) => {
   return (
     <li className='movie'>
         <img src={props.image} alt={props.title}/>
         <h2> {props.title} </h2>
         <h4>{props.description}</h4>
      





        {props.ge.map((genre) => (
            <Genre
            genre={genre.name}
            />
        ))}






        
        
         

     </li>
   )
 };

export default Movie;