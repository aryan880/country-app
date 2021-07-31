import React, { useEffect, useState } from 'react'
import './Header.css'
import Country from '../country/Country';

function Header() {

  const [data,setData] = useState([]);
  const [search,setSearch] = useState("");

  useEffect(() => {
    async function fetchMyApi(){
      let response = await fetch("https://restcountries.eu/rest/v2/all");
      let data =  await response.json();
      setData(data)
    }
    fetchMyApi();
  }, [])

  if(data.length === 250){
    var languagesArray = [];
    data.forEach((d) => {
      d.languages.forEach((language) => {
        languagesArray.push(language.name);
      })
    });
    console.log(languagesArray);
  }

  let filteredArray = data.filter(d => {

    if(search.toLowerCase() === ""){
      return d
    }
    else if(d.name.toLowerCase().includes(search.toLowerCase()) || d.capital.toLowerCase().includes(search.toLowerCase())){
      console.log("called")
      return d;
    }
    else{
      console.log(search)
        for(const element of d.languages){
          var a = element.name.toLowerCase().includes(search.toLowerCase());
          if(a === true){
            console.log("true");
            return d;
          }
        }
    }
  })
  
  console.log("HEADER COMP")
  return (
    <div className = "header">
      <h1 className = "header-title">World Countries Data</h1>
      <h3 className = "header-sub">Currently, we have {data.length} countries</h3>
      {search.length !==0 ? 
        <h3 className = "header-search">
          {filteredArray.length} satisfied the search criteria </h3> : " "
      }
        <div className = "search">
        <input className = "search-input" placeholder = "Search Countries by name, city and languages" onChange = {(e) => setSearch(e.target.value)} />
      </div>
      <div className = "card-parent">
        {filteredArray.map((d) => <Country data = {d}/>)}
      </div>
      <div className = "div-button">
        <button>POPULATION</button>
        <button>LANGUAGES</button>
      </div>
      <h3>10 Most Populated Countries in the World</h3>
      <div className = "box">
        <div className = "parent">
        </div>
      </div>
    </div>
  )
}
export default Header;