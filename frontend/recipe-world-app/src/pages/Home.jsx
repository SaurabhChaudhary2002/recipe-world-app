import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import recipeWorld from '../assets/foodrecipe.jpg'
import RecipeItems from "../components/Recipeitems";
import Modal from "../components/Modal";
import InputForm from "../components/inputForm";

export default function Home() {
  const navigate=useNavigate()
  const [isOpen,setIsOpen]=useState(false)

  const addRecipe=()=>{
    let token=localStorage.getItem("token")
    if(token)
    navigate("/addRecipe")
  else{
    setIsOpen(true)
     }
  }

  return (
    <>
    
    <section className='home'>
        <div className='left'>
            <h1>Welcome to RecipeWorld</h1>
          <h5>
            Explore hundreds of delicious recipes from around the world. Save your favourite dishes, discover new cooking ideas, and share your own recipes with the RecipeWorld community.
         </h5>
              <button onClick={addRecipe}>🍳 Add Your Recipe</button>         
           </div>
           <div className='right'>
           <img
             src={recipeWorld}
             alt="RecipeWorld"
             width="920"
             height="280"
             />
           </div>
    </section>
    <div className='bg'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,32L48,58.7C96,85,192,139,288,144C384,149,480,107,576,85.3C672,64,768,64,864,58.7C960,53,1056,43,1152,53.3C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
{ (isOpen) && <Modal onClose={() => setIsOpen(false)}><InputForm setIsOpen={() => setIsOpen(false)}/></Modal>}
    <div className='recipe'>
      <RecipeItems/>
    </div>
  
    </>
  )
}
