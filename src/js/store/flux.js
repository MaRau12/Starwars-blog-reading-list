import { useState } from "react";


const getState = ({ getStore, getActions, setStore }) => {
	
	
		   
	return {

		
      
    
		store: {
			
		        characters: [],
				planets: [],
				vehicles: [],
				characterInfo: [],
				planetInfo: [],
				vehicleInfo: [],
				favourites: [],
   
		
			demo:
			[
	
				

				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			
			addFavourite: (item) => {
				let aux = getStore().favourites;
				if (!aux.find(el => el.name === item.name)) {
					aux.push(item);
					setStore({ favourites: aux });
				}	
				console.log(aux)
			  },
            
			  removeFavourite: (item) =>{
				let aux = getStore().favourites;
				aux.splice(item, 1)
				setStore({favourites: aux})
			  }
			,
			
			showCharacterInfo: (id) => {
				fetch("https://www.swapi.tech/api/people/" + id)
				  .then((resp) => resp.json())
				  .then((data) =>
				  	
					setStore({ characterInfo: data.result.properties })
				  )
				  .catch((error) => console.log(error));
			},

			showPlanetInfo: (id) => {
				fetch("https://www.swapi.tech/api/planets/" + id)
				  .then((resp) => resp.json())
				  .then((data) =>
				  	
					setStore({ planetInfo: data.result.properties })
				  )
				  .catch((error) => console.log(error));
			},


			showVehicleInfo: (id) => {
				fetch("https://www.swapi.tech/api/vehicles/" + id)
				  .then((resp) => resp.json())
				  .then((data) =>
				  	
					setStore({ vehicleInfo: data.result.properties })
				  )
				  .catch((error) => console.log(error));
			},
           
		


           LoadSomeData: () => {

		   fetch("https://www.swapi.tech/api/people")
          .then((resp) => resp.json())
          .then((data) => setStore({ characters: data.results }))
          .catch((error) => console.log(error));

           fetch("https://www.swapi.tech/api/planets")
          .then((resp) => resp.json())
          .then((data) => setStore({ planets: data.results }))
          .catch((error) => console.log(error));

		  fetch("https://www.swapi.tech/api/vehicles")
          .then((resp) => resp.json())
          .then((data) => setStore({ vehicles: data.results }))
          .catch((error) => console.log(error));

		  
           },

		   
			

	    }
	};
};

export default getState;


/*

if (isFavourite){ favourites = favourites.filter(el => el.name !== element.name); } 
				else { }



				favouriteHandler: (element) => {
             const store = getStore()
			 let favourites = store.favourites
			
			    const isFavourite = favourites.find(el => el.name === element.name)
				if (isFavourite){ favourites = favourites.filter(el => el.name !== element.name); } 
				else {  favourites.push(element);}
				
				console.log(store.favourites)

				setStore({ favourites })
				}

*/
