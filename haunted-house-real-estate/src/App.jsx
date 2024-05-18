import React from "react"
import { nanoid } from "nanoid"
import housesForSale from "./data/housesForSale"

import './App.css'

 function App() {
    
  /* Challenge
  
      The JSX of the houseCards being generated by the map method below needs to be put in a separate functional component. Your task is to do so as follows:
      
          1. The current JSX in the return statement of the map method below should be replaced by a 
             single instance of a <HouseCard /> component, which you will have to create. 
             
          2. The HouseCard component should return the same JSX as is currently being returned inside 
             the map method. 
      
      3. The variables in the JSX should become props, which will need to be passed into the 
             <HouseCard /> you will be returning in the map method. 
         
      4. The HouseCard component should be placed in a separate file in the components folder and 
             imported into this App.jsx file.
          
          5. You should only pass up to a maximum of four props into <HouseCard />. You 
             *should not* manually pass every piece of houseData as a seperate prop! The site should look and behave exactly the same once you've completed these tasks. The challenge here is just about improving the code "underneath the hood"!
  
         Bonus Challenge: Generate the list items in the unordered list iteratively (i.e., using some sort of iterative method/approach), rather than manually (as they are currently being generated).
  */
      
    const houseCards = housesForSale.map((houseData, index, array) => {
      return (
        <div className="house-card" key={houseData.id}>
          <p>
            Listing {index + 1} of {array.length}
          </p>
          <img src={houseData.image} />
          <div>
            <ul>
              <li>
                <span>Price:</span> 
                              {houseData.price}
              </li>
              <li>
                <span>Location:</span> 
                              {houseData.location}
              </li>
              <li>
                <span>Square Feet:</span> 
                              {houseData.squareFeet}
              </li>
              <li>
                <span>Acres:</span> 
                              {houseData.acres}
              </li>
              <li>
                <span>Year Built:</span> 
                              {houseData.yearBuilt}
              </li>
              <li>
                <span>Bedrooms:</span> 
                              {houseData.bedrooms}
              </li>
              <li>
                <span>Bathrooms:</span> 
                              {houseData.bathrooms}
              </li>
              <li>
                <span>Other Rooms:</span> 
                              {houseData.otherRooms}
              </li>
              <li>
                <span>Garage:</span> 
                              {houseData.garage ? "Yes" : "No"}
              </li>
              <li>
                <span>Air Conditioning:</span>
                              {houseData.airConditioning ? "Yes" : "No"}
              </li>
              <li>
                <span>Heating:</span> 
                              {houseData.heating ? "Yes" : "No"}
              </li>
              <li>
                <span>Haunted:</span> 
                              {houseData.haunted ? "Yes" : "No"}
              </li>
            </ul>
          </div>
        </div>
      )
    })
  
    return (
      <div className="wrapper">
        <header>
          <img className="logo" src="images/logo.png" />
        </header>
        <div className="house-cards-container">
                  {houseCards}
              </div>
      </div>
    )
  }

export default App
