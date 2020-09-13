import React, { useEffect,useState } from 'react' 
import axios from 'axios'

function Profile(props){
    const [countries, getCountries]= useState([]);
    const [status, changeStatus]=useState(false);
    useEffect(()=> {
       axios.get('https://restcountries.eu/rest/v2/all')
       .then(result =>{
        getCountries(result.data);
        changeStatus(true)
       }) .catch(error=>{
           changeStatus(true)
       })
    }, [])

    if(status){
        return(
            <ul>
                {countries.map((country,index)=>
                <li key={index}> {country.name} </li>
                )}
            </ul>

        ); 
    } else {
        return(
            <h1>Loading...</h1>
        )
    }
}
export default Profile;
