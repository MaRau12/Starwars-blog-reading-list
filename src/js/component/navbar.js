import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const Navbar = () => {

	/*fetch('https://www.swapi.tech/api/')
	.then(response => {
	if (!response.ok) {
	   throw Error(response.statusText);
	}
	// Read the response as json.
	 return response.json();
	 })
	.then(responseAsJson => {
	// Do stuff with the JSONified response
	 console.log(responseAsJson);
	 })
	.catch(error => {
		console.log('Looks like there was a problem: \n', error);
	});

	/*fetch("https://www.swapi.tech/api/people")
          .then((resp) => resp.json())
          .then((data) => setStore({ characters: data.results }))
          .catch((error) => console.log(error));

        fetch("https://www.swapi.tech/api/planets")
          .then((resp) => resp.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));

		  fetch("https://www.swapi.tech/api/vehicles")
          .then((resp) => resp.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));*/

	return (<div className="">
		<nav className="navbar navbar-light bg-light mb-3 ">
		<Link to="/">
			<DropdownButton id="dropdown-basic-button" title="Dropdown button" className="" >				
			<Dropdown.Item >Go Somewhere </Dropdown.Item>	
            <Dropdown.Item >Another action</Dropdown.Item>
            <Dropdown.Item >Something else</Dropdown.Item>
            </DropdownButton>
		</Link>	

		
		</nav>
		</div>
	);
};
