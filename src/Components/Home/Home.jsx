import React, {useState, useEffect} from 'react'
import {useQuery} from '@apollo/react-hooks';
import Continents from '../Continents/Continents.jsx';
import Lenguage from '../Languages/Languages.jsx';
import { ALL_CONTINENTS, GET_COUNTRIES } from "../../Utils/Querys.js"
import Loading from '../Loading/Loading.jsx';
import {BsSearch} from "react-icons/bs"
import "./Home.css"
const _ = require('lodash');

const Home = () => {
    const [filter, setFilter] = useState("countries")
    const [countriesState, setCountriesState] = useState(null)
    const response = useQuery(ALL_CONTINENTS)
    const countries = useQuery(GET_COUNTRIES)

    useEffect(() => {
        if(countries.data){
          setCountriesState(countries.data.countries)
        }
      }, [countries])

      if(response.error) return <p>{response.error}</p>

      const handleSubmit = (e) => {
        e.preventDefault();
        const input = document.getElementById("input").value;
        const countriesByName = _.filter(countries.data.countries, function(o) { return o.name.toLowerCase().includes(input.toLowerCase()); });
        //if(countriesByName.length===0) alert("404 - Countries not found")
        setCountriesState(countriesByName)
      }

      const filters = (e) => {
        const state = e.target.name;
        setFilter(state)
      }

  return (
    <div>
        <div>
            <form className='Home_form_inputs' onSubmit={handleSubmit}>
                <div class="form__group field">
                <input autocomplete="off" required="" className="form__field" placeholder='Search for a country' id='input' type="search"/>
                <label class="form__label" for="name">Search for a country</label>
                <button onClick={e=>handleSubmit(e)} type="submit" className='submit'><BsSearch/></button>
                </div>
            </form>
            <div className='Home_filters_button'>
                <button name='countries' onClick={(e) => filters(e)}>Continents</button>
                <button name='lenguages' onClick={(e) => filters(e)}>Lenguages</button>
            </div>
        </div>
        {response.loading?<Loading/>:countriesState?.length!==0?
        filter === "countries"?<Continents countries={countriesState}></Continents>:<Lenguage countries={countriesState} search={document.getElementById("input").value}></Lenguage>:<h1 className='CountryNotFound'>404 - Countries not found</h1>}
    </div>
  )
}

export default Home