import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLoaderData,  Link  } from 'react-router-dom'

import matarPaneer from '../assets/Matar Paneer.jpg'
import mixVeg from '../assets/Mix Veg.jpg'
import butterRoti from '../assets/Butter Tandoori Roti.jpg'
import paneerButterMasala from '../assets/Paneer Butter Masala.jpg'

import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function RecipeItems() {
  const recipes=useLoaderData()
  const [allRecipes,setAllRecipes]=useState()
  let path=window.location.pathname==="/myRecipe" ? true :false
  let favItems=JSON.parse(localStorage.getItem("fav")) ?? []
  const [isFavRecipe,setIsFavRecipe]=useState(false)
  console.log(allRecipes)

 useEffect(() => {
  setAllRecipes(recipes)
}, [recipes])

const onDelete = async(id) => {
  await axios.delete(`http://localhost:5000/recipe/${id}`)
    .then((res) => console.log(res))

  setAllRecipes(recipes => recipes.filter(recipe => recipe._id !== id))
  let filterItem=favItems.filter(recipe=>recipe._id !== id)
  localStorage.setItem("fav",JSON.stringify(filterItem))
}

const favRecipe=(item)=>{
  let filterItem=favItems.filter(recipe=>recipe._id !== item._id)
   favItems=favItems.filter(recipe=>recipe._id === item._id).length=== 0 ?[...favItems,item] : filterItem
   localStorage.setItem("fav",JSON.stringify(favItems))
   setIsFavRecipe(pre=>!pre)
  }

  
  return (
    <>
    <div className='card-container'>
      {


        allRecipes?.map((item, index) => {

  let recipeImage;

  if (item.title === "Matar Paneer") {
    recipeImage = matarPaneer;
  } else if (item.title === "Mix Veg") {
    recipeImage = mixVeg;
  } else if (item.title === "Butter Tandoori Roti") {
    recipeImage = butterRoti;
  } else if (item.title === "Paneer Butter Masala") {
    recipeImage = paneerButterMasala;
  }



          return (
            <div key={index} className='card'>
              <img src={`http://localhost:5000/images/${item.coverImage}`} width="220px" height="120px" alt={item.title}/>
              <div className='card-body'>
                <div className='title'>{item.title}</div>
                <div className='icons'>
                  <div className='timer'><BsStopwatchFill />{item.time}</div>
                 {(!path) ? <FaHeart onClick={()=>favRecipe(item)}
                  style={{color:(favItems).some(res=>res._id===item._id) ? "red" : ""}}/> :
                  <div className='action'>
                    <Link to={`/editRecipe/${item._id}`} className="editIcon"><FaEdit /></Link>
                    
                  <MdDelete onClick={()=>onDelete(item._id)} className='deleteIcon'/>
                  </div>
                  }
                  
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
    </>
   
  )
}
