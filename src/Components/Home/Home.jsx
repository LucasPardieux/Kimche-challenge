import React, {useState, useEffect} from 'react'
import {useQuery} from '@apollo/react-hooks';
import Continents from '../Continents/Continents.jsx';
import Lenguage from '../Languages/Languages.jsx';
import { ALL_CONTINENTS, GET_COUNTRIES } from "../../Utils/Querys.js"
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
        setCountriesState(countriesByName)
      }

      const filters = (e) => {
        const state = e.target.name;
        setFilter(state)
      }

  return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                <input id='input' type="search"/>
                <input type="submit" onClick={e=>handleSubmit(e)}/>
            </form>
            <div>
                <button name='countries' onClick={(e) => filters(e)}>Continents</button>
                <button name='lenguages' onClick={(e) => filters(e)}>Lenguages</button>
            </div>
        </div>
        {response.loading?<p>Loading...</p>:
        filter === "countries"?<Continents countries={countriesState}></Continents>:<Lenguage countries={countriesState} search={document.getElementById("input").value}></Lenguage>}
    </div>
  )
}

export default Home