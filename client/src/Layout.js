//main page with the map and listings, overall layout

//Delete: for search bar: <div class = "flex flex-grow border-2 border-primary rounded bg-secondary">

import React from 'react';
import {useState} from 'react';
import logo from './assets/mac_and_cheese.png';

function Layout() {
    const [inputValue, setInputValue] = useState('Enter Your Location');
        
    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

  return (
    <div class = "flex flex-row flex-wrap h-screen bg-secondary" > {/* main screen*/}
        <div class = "w-3/5 text-custom_gray "> {/* listing part*/}
            <div class = "flex items-center h-12 p-2 mt-2"> {/* Logo + search bar*/}
                <img src= {logo} alt = "logo" class= "w-8 h-8 ml-4 mr-8"/>
                <input type="text" value={inputValue} onChange={handleChange} class = "flex flex-grow h-8 p-4 pl-2 mr-4 border-2 border-primary rounded-md bg-secondary "/>
            </div>
            <div class ="flex flex-grow flex-col mt-8 justify-start" >
                <div> 
                    Listing 1
                </div>
                <div>
                    Listing 2
                </div>
                <div>
                    Listing 3
                </div>
            </div>
            
        </div>
        <div class = "sticky h-full w-2/5 bg-primary text-secondary place-items-center"> {/* map part*/}
            The Map Component is hereeeeeeeeeeeeeeeeee
        </div>
    </div>
  );
}

export default Layout;