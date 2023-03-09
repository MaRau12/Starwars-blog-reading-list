

const getState = ({ getStore, getActions, setStore }) => {
	
	
		   
	return {

		
      
    
		store: {
			
		        characters: [],
				planets: [],
				vehicles: [],
				characterInfo: [],
   
		
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
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			

			
			showCharacterInfo: (id) => {
				fetch("https://www.swapi.tech/api/people/" + id)
				  .then((resp) => resp.json())
				  .then((data) =>
				  	
					setStore({ characterInfo: data.result.properties })
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

		 // {…store, people: data}
           },

		   
			
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
			
				});

				//reset the global store
				setStore({ demo: demo });
			}
	    }
	};
};

export default getState;
