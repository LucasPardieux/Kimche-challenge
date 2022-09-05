import React, { useEffect, useState } from 'react'

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
          arrayAux.push(<div key={Filtered[y].code}>
              <div>
              <h4>{Filtered[y].name}</h4>
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
            return (<div key={c}>
                <h1>{c}</h1>
                 {compareContinents(c)}
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