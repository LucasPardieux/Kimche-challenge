import React, { useEffect, useState } from 'react'
import Flag from 'react-world-flags'
import "./Continents.css";

const Continent = ({countries}) => {
  const [continents, setContinents] = useState([])
  const [Filtered, setFiltered] = useState(countries)

  useEffect(() => {
    mapCountries(countries)
}, [countries])

const mapCountries = (countries) => {
  let continentsArray=[]
  continentsArray = countries?.map(a=>{
          if(!continentsArray.includes(a.continent.name)){
              return a.continent.name
          }
  })
  const continentsNames = [...new Set(continentsArray)];
  setFiltered(countries)
  setContinents(continentsNames)
}

const compareContinents = (c) =>{
  let arrayAux=[];
  for(let y in Filtered){
    console.log(Filtered)
      if(Filtered[y].continent.name === c){
          arrayAux.push(<div className='Continent_card_cont' key={Filtered[y].code}>
              <div className='Continent_card_title'>
                <div className="Continent_card_flagContainer">
              <span><Flag className="Continent_card_flag" code={ Filtered[y].code } /></span>
                </div>
                <h4>{Filtered[y].name}</h4>
              </div>
              <div className="Continent_card_info">
              <p>Capital: <span>{Filtered[y].capital}</span></p>
              <p>Currency: <span>{Filtered[y].currency}</span></p>
              <p>Native: <span>{Filtered[y].native}</span></p>
              <p>Phone: (<span>{Filtered[y].phone}</span>)</p>
              </div>

          </div>) 
      }
  }
  return arrayAux
}

  return (
    <div>
        {Filtered?.length!==0?
        continents?.map(c=>{
            return (<div key={c} >
                <h1>{c}</h1>
                <div className="Continent_container">
                 {compareContinents(c)}
                </div>
            </div>)
          })
        :countries?.map((country)=> {
            return (
                <div key={country.code}>
                    <h1>{country.continent.name}</h1>
                    <div>
                        <h4>{country.name}</h4>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Continent