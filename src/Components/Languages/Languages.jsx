import React, { useEffect, useState} from 'react'
import Flag from 'react-world-flags'
import "./Languages.css"
const _ = require('lodash');

const Languages = ({countries, search}) => {
    const [languages, setLanguages] = useState([]);
    const [Filtered, setFiltered] = useState([]);

    useEffect(() => {
        unify(countries)
 }, [countries]);

 const unify = (array) => {
    let languagesArray=[]
    languagesArray = array.map(a=>{
        for(let x in a.languages){
            if(!languagesArray.includes(a.languages[x].name)){
                return a.languages[x].name
            }
        }
    })
    const languages = [...new Set(languagesArray)];
        setFiltered(countries)
        setLanguages(languages)
    }

    const compareLanguages = (l) => {
        let arrayAux=[];
        for(let y in Filtered){
            for (let z in Filtered[y].languages){
                if(Filtered[y].languages[z].name === l){
                    arrayAux.push(
                    <div className='Continent_card_cont' key={Filtered[y].code}>
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
        }
        return [...new Set(arrayAux)]
    }

  return (
    <div>
        {languages?.map((l)=>{
            return (<div className="Continent_container" key={l}>
                <div className="Continent_title">
                <h1 className="Continent_card_group">{l}</h1>
                <div className="Continent_separator"></div>
                </div>
                <div className="Continent_eachCard">
                 {compareLanguages(l)}
                </div>
            </div>)
        })
        // :countries?.map(c=>{
        //     return (
        //         <div key={c.code}>
        //             <h1>{c.languages?.map(l=>l.name)}</h1>
        //         </div>
        //     )
        // })
        }
    </div>
  )
}

export default Languages