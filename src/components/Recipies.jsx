import { useState } from "react"

const firstRecipe={
    eggs:2,
    bread:1
}

const secondRecipe={
    ...firstRecipe,
    onions:2
}


const Recipes=()=>{
  const [recipe,setRecipe]=useState({ })
  console.log(recipe)
    return (
        <div>
         <h3>Current Recipe</h3>
         <button onClick={()=>setRecipe(firstRecipe)} >First Recipe</button>
         <button onClick={()=>setRecipe(secondRecipe)} >Second Recipe</button>
          <ul>
              { 

                  Object.keys(recipe).map((material)=>{
                      return <li key={material} >{material} : {recipe[material]} </li>
                  })
              }
          </ul>
        </div>
    )
}

export default Recipes