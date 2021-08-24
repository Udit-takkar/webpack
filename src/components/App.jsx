import "../../styles/index.css"
import Recipes from './Recipies'

import React from 'react'

function App() {
    return (
        <>
           <section className="hero"></section> 
           <main>
               <section>
                   <h1>Hello React</h1>
               </section>
           </main>
             <Recipes />
        </>
    )
}

export default App
