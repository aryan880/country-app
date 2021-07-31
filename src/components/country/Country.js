import React from 'react'
import './Country.css'

function Country(props) {
  return (
      <div className = "country-card">
        <div className = "country-image">
          <img className = "country-flag" src = {props.data.flag} alt="flag" />  
        </div>
        <div className = "country-body">
          <div className = "country-name">
            <p className = "name">{props.data.name.toUpperCase()}</p>
          </div>
          <div className = "country-capital">
            <p><span>Capital</span>: {props.data.capital}</p>
          </div>
          <div className = "country-languages">
            <p><span>Languages</span>: {props.data.languages.map((language) => {
              if(props.data.languages.indexOf(language) !== props.data.languages.length-1){
                return (language.name + ", ")
              }
              else{
                return language.name
              }
              })}
            </p>
          </div>
          <div className = "country-population">
            <p><span>Population</span>: {props.data.population}</p>
          </div>
          <div className = "country-currency">
            <p><span>Currency</span>: </p>
          </div>
        </div>
      </div>

  )
}
export default Country;