import { useEffect, useState } from "react";
import ReactDOM from "react-dom";



const Navbar = () => {

    const [data, setData] = useState();


    useEffect(() => {
     
        const url = 'https://realtor.p.rapidapi.com/locations/v2/auto-complete?input=new%20york&limit=10';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '9e71f1940bmshb5188c44eaae3a5p113c89jsnecd5762d3c97',
                'X-RapidAPI-Host': 'realtor.p.rapidapi.com'
            }
        };

try {  
    const response =  fetch(url, options)
	.then(response =>  response.json())
    .then(dat => setData(dat))
	console.log(data);

	
} catch (error) {
	console.error(error);
}
    },[] )
    console.log(data);

    return(
        <div>

        </div>
    )
}

export default Navbar;